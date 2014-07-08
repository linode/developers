class JSONFeed < Middleman::Extension
  def initialize(app, options_hash={}, &block)
    super

    require 'json'
  end

  def after_build(builder)
    @builder = builder
    generate_feed
  end

  def generate_feed
    root = app.sitemap.resources.find_all { |p| p.destination_path.match(/^library\/index\.html$/) }

    tile_resources = root.first.data.tiles.map do |t|
      app.sitemap.resources.find_all { |p| p.destination_path.match(/^library\/#{t.url}\/index\.html/) }
    end

    tiles = tile_resources.map do |t|
      type = (t.first.metadata[:options][:layout] == :categories_layout) ? 'category' : 'article'
      tile = {
        relative_path: "/#{t.first.destination_path.gsub(/\/index\.html$/, '')}",
        title: t.first.data.title,
        type: type,
      }
      if type == 'category' && t.first.children
        tile['children'] = recurse_tree(t.first)
      end
      tile
    end

    result = {
      last_modified: Time.now.to_i,
      sitemap: [
        relative_path: nil,
        title: 'Guides',
        type: 'category',
        children: tiles,
      ]
    }
    File.open('build/library/sitemap.json', 'w') { |f| f.write(result.to_json) }

    @builder.say_status :create, 'build/library/sitemap.json'
    return 'build/library/sitemap.json'
  end

  def recurse_tree(parent, feed=[])
    parent.children.each do |c|
      next unless c.data.title
      type = (c.metadata[:options][:layout] == :categories_layout) ? 'category' : 'article'
      nugget = {
        relative_path: "/#{c.destination_path.gsub(/\/index\.html$/, '')}",
        title: c.data.title,
        type: type,
      }
      if type == 'category' && c.children
        nugget['children'] = recurse_tree(c)
      end
      feed << nugget
    end

    feed
  end
end

::Middleman::Extensions.register(:json_feed, JSONFeed)

activate :directory_indexes
activate :alias

module Middleman::Sitemap
  class AliasResource < ::Middleman::Sitemap::Resource
    def initialize(store, path, alias_path)
      @alias_path = alias_path
      super(store, "library/#{path}")
    end
  end
end

page '*', :layout => :article_layout
page '*/index.html', :layout => :categories_layout
ignore 'README.html'

set :js_dir, 'js'
set :font_dir, 'fonts'
set :images_dir, 'images'

set :partials_dir, '../lib/partials'
set :layouts_dir,  '../lib/layouts'

after_configuration do
  sprockets.append_path '../lib/assets/js'
  sprockets.append_path '../lib/assets/stylesheets'
  sprockets.import_asset 'home.css'
  sprockets.import_asset 'syntax.css'

  all_js = Dir.glob 'lib/assets/js/*.js'
  all_js.each do |js|
    sprockets.import_asset File.basename(js)
  end
end

activate :json_feed
activate :sitemap, :hostname => 'https://www.linode.com'
activate :syntax, :line_numbers => true

ready do
  js = Dir.glob('lib/assets/js/*')
  js.each do |j|
    proxy "library/js/#{File.basename(j)}", "js/#{File.basename(j)}"
  end
  css = Dir.glob('lib/assets/stylesheets/*.css')
  css.each do |c|
    proxy "library/stylesheets/#{File.basename(c)}", "stylesheets/#{File.basename(c)}"
  end
  fonts = Dir.glob('lib/assets/fonts/*')
  fonts.each do |f|
    proxy "library/fonts/#{File.basename(f)}", "fonts/#{File.basename(f)}"
  end
  proxy 'library/images/header/linode_logo_white.png', 'images/header/linode_logo_white.png'
  proxy 'library/images/rss/logo.png', 'images/rss/logo.png'
end

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript
  ignore 'README.md'
  ignore 'CONTRIBUTING.md'

  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  set :http_prefix, "/library/"
end

configure :development do
  require 'middleman-livereload'
  activate :livereload
end
