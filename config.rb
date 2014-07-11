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
  # set :http_prefix, "/library/"
end

configure :development do
  require 'middleman-livereload'
  activate :livereload
end
