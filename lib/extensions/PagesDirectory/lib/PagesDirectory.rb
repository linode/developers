# Require core library
require 'middleman-core'

# Extension namespace
class Middleman::Extensions::PagesDirectory < Middleman::Extension
  register :pages_directory
  option   :pages_dir, 'pages', 'Directory for site pages'

  def manipulate_resource_list(resources)
    pages_directory = File.join(app.root, 'source', options.pages_dir) << '/'
    pages = Dir[File.join(pages_directory, '**/*')]

    # Don't map directories
    pages.reject! { |path| File.directory? path }

    resources + pages.map do |source|
      page = app.sitemap.extensionless_path source[pages_directory.length..-1]
      Middleman::Sitemap::Resource.new app.sitemap, page, source
    end
  end

end


# Register extensions which can be activated
# Make sure we have the version of Middleman we expect
# Name param may be omited, it will default to underscored
# version of class name

# MyExtension.register(:my_extension)
