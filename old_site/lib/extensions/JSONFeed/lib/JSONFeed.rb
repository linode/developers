# Require core library
require 'middleman-core'

# Extension namespace
class JSONFeed < Middleman::Extension
  # option :my_option, 'default', 'An example option'

  def initialize(app, options_hash={}, &block)
    super

    require 'json'
  end

  def after_build(builder)
    @builder = builder
    generate_feed
  end

  def generate_feed
    root = app.sitemap.resources.find_all { |p| p.destination_path.match(/^docs\/index\.html$/) }

    if root.empty?
      @builder.say_status :error, 'Unable to build sitemap.json'
      return ''
    end

    tile_resources = root.first.data.tiles.map do |t|
      app.sitemap.resources.find_all { |p| p.destination_path.match(/^docs\/#{t.url}\/index\.html/) }
    end

    tiles = tile_resources.map do |t|
      next if t.first.data.deprecated
      type = (t.first.metadata[:options][:layout] == :categories_layout) ? 'category' : 'article'
      tile = {
        relative_path: "/#{t.first.destination_path.gsub(/\/index\.html$/, '')}?format=app",
        title: t.first.data.title,
        type: type,
      }
      if type == 'category' && t.first.children
        tile['children'] = recurse_tree(t.first)
      end
      tile
    end.reject { |t| t.nil? }

    result = {
      last_modified: Time.now.to_i,
      sitemap: [
        relative_path: nil,
        title: 'Guides',
        type: 'category',
        children: tiles,
      ]
    }
    File.open('build/docs/sitemap.json', 'w') { |f| f.write(result.to_json) }

    @builder.say_status :create, 'build/docs/sitemap.json'
    return 'build/docs/sitemap.json'
  end

  def recurse_tree(parent, feed=[])
    parent.children.each do |c|
      next if c.data.deprecated
      next unless c.data.title
      type = (c.metadata[:options][:layout] == :categories_layout) ? 'category' : 'article'
      nugget = {
        relative_path: "/#{c.destination_path.gsub(/\/index\.html$/, '')}?format=app",
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

  # A Sitemap Manipulator
  # def manipulate_resource_list(resources)
  # end

end

# Register extensions which can be activated
# Make sure we have the version of Middleman we expect
# Name param may be omited, it will default to underscored
# version of class name

# MyExtension.register(:my_extension)
Middleman::Extensions.register(:json_feed, JSONFeed)
