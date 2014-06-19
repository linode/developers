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
    root = app.sitemap.resources.find_all { |p| p.destination_path.match(/^index\.html$/) }
    tile_resources = root.first.data.tiles.map do |t|
      path = t['url'].gsub!(/^\//, '')
      app.sitemap.resources.find_all { |p| p.destination_path.match(/^#{path}\/index\.html/) }
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
    File.open('build/sitemap.json', 'w') { |f| f.write(result.to_json) }

    @builder.say_status :create, 'build/sitemap.json'
    return 'build/sitemap.json'
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

#page 'search', :layout => :search
page '*', :layout => :article_layout
page '*/index.html', :layout => :categories_layout

set :js_dir, 'js'
set :font_dir, 'fonts'

set :partials_dir, '../lib/partials'
set :layouts_dir,  '../lib/layouts'

after_configuration do
  sprockets.append_path '../lib/assets/js'
  sprockets.append_path '../lib/assets/stylesheets'
  sprockets.import_asset 'home.css'
  sprockets.import_asset 'syntax.css.erb'

  all_js = Dir.glob 'lib/assets/js/*.js'
  all_js.each do |js|
    sprockets.import_asset File.basename(js)
  end
end

activate :json_feed
activate :sitemap, :hostname => 'https://library.linode.com'
activate :syntax, :line_numbers => true

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end
