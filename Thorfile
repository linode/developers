class Default < Thor
  desc 'rss [files]', 'Add the specified articles to the RSS feed'
  def rss(*files)
    require 'builder'
    require 'date'
    require 'rss'
    require 'uri'
    require 'yaml'

    library_url = 'https://library.linode.com/'
    rss_file = 'source/rss.xml'
    max_entries = 20

    new_items = []

    # Get data from new articles
    files.each do |file|
      meta = YAML.load File.read(file)
      article_path = file.match(/^source(.*)\.md$/)[1]
      link = File.join(library_url, article_path)

      new_items << {
        :title => meta["title"],
        :link => link,
        :pubDate => meta["modified"],
        :author => "#{meta['author']['email']} (#{meta['author']['name']})",
        :description => meta["description"],
        :guid => link
      }
    end

    # load in existing rss feed if it exists
    if File.exists? rss_file
      RSS::Parser.parse(rss_file).items.each do |item|
        break if new_items.size >= max_entries

        new_items << {
          :title => item.title,
          :link => item.link,
          :pubDate => item.pubDate,
          :description => item.description,
          :author => item.author,
          :guid => item.guid.content
        }
      end
    end

    # generate a new feed
    xml = Builder::XmlMarkup.new( :indent => 2 )
    new_feed = xml.instruct!

    xml.rss :version => '2.0', 'xmlns:atom' => 'http://www.w3.org/2005/Atom' do
      xml.channel do
        xml.title 'The Linode Library'
        xml.link library_url
        xml.description 'Linux VPS guides and technical documentation from the Linode Library'
        xml.category 'Computers', :domain => 'http://www.dmoz.org'
        xml.language 'en-us'
        xml.lastBuildDate Time.now.rfc2822
        xml.tag! 'atom:link', :rel => 'self', :type => 'application/rss+xml', :href => File.join(library_url, rss_file)
        xml.docs 'http://www.rssboard.org/rss-specification'
        xml.copyright "Copyright © 2009-#{Date.today.year} Linode, LLC. All rights reserved."

        xml.image do
          xml.url File.join library_url, 'media/images/rss-image.png'
          xml.title 'The Linode Library'
          xml.link library_url
        end

        new_items.each do |item|
          xml.item do
            xml.title item[:title]
            xml.link item[:link]
            xml.guid item[:guid], :isPermaLink => true
            xml.pubDate Time.parse(item[:pubDate].to_s).rfc2822
            xml.description item[:description]
            xml.author item[:author]
          end
        end
      end
    end

    # write
    File.open(rss_file, 'w') { |f| f.write new_feed }

  end
end
