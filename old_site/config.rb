activate :directory_indexes
activate :alias

require 'lib/extensions/library_alias'

page '*', :layout => :article_layout
page '*/index.html', :layout => :categories_layout

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

activate :pages_directory, :pages_dir => '../pages'
activate :json_feed
activate :sitemap, :hostname => 'https://www.linode.com'
activate :syntax, :line_numbers => true

ready do
  sitemap.resources.select do |resource|
    if resource.path =~ /^(stylesheets|fonts|js|images)\//
      proxy "docs/#{resource.path}", resource.path
    end
  end
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
  # set :http_prefix, "/docs/"
end

configure :development do
  require 'middleman-livereload'
  config[:file_watcher_ignore] += [ /.git\// ]
  activate :livereload
end

