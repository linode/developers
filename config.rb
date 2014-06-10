activate :directory_indexes

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

  all_js = Dir.glob 'lib/assets/js/*.js'
  all_js.each do |js|
    sprockets.import_asset File.basename(js)
  end
end

activate :alias

###/
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
# activate :livereload

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# fixme: development shim
# %x{
#   rsync -a --exclude .git --delete ~/git/library-articles/articles/* ~/git/library-ng/source/library
# }

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

page "/sitemap.xml", :layout => false

