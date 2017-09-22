class RSS < Thor
  option :confirm, :type => :boolean
  desc 'add [files]', 'Add the specified articles to the RSS feed'
  def add(*files)

    # first, pull the latest feed
    pull

    # if no files are specified, just read the current RSS feed
    if files.empty?
      show
      exit
    end

    # Get data from new articles
    begin
      new_items = new_rss files
    rescue NoMethodError => e
      say "[ERROR] Something's wrong with the metadata of one your articles. Aborting", :red
      exit
    end

    # load in existing rss feed if it exists
    begin
      new_items.concat existing_rss
    rescue => e
      say "[ERROR] Something's wrong with the current RSS file. Try to fix it manually?", :red
      exit
    end

    # make sure we have no more than max_entries
    new_items = new_items.first max_entries

    # write or preview
    if options[:confirm]
      write_rss! new_items
      push! new_rss(files)
    else
      rss_dry_run new_items
    end
  end

  desc 'pull', 'Pull latest RSS feed'
  def pull
    system "cd #{rss_dir}; git pull --rebase origin master"
  end

  desc 'show', 'Show the current RSS feed contents'
  def show
    say 'Current RSS file contents', :yellow
    puts_rss existing_rss
  end

  private

  def linode_url
    @linode_url ||= 'https://www.linode.com'
  end

  def library_url
    @library_url ||= File.join linode_url, 'docs/'
  end

  def rss_dir
    @rss_dir ||= 'pages/docs/rss'
  end

  def rss_file
    @rss_file ||= File.join rss_dir, 'index.xml'
  end

  def max_entries
    @max_entries ||= 20
  end

  def new_rss(files)
    require 'yaml'

    new_items = []
    files.each do |file|
      meta = YAML.load File.read(file)
      article_path = file.match(/^source(.*)\.md$/)[1]
      link = File.join(linode_url, article_path)

      new_items << {
        :title => meta['title'],
        :link => link,
        :pubDate => meta['modified'],
        :author => "#{meta['author']['email']} (#{meta['author']['name']})",
        :description => meta['description'],
        :guid => link
      }
    end

    new_items
  end

  def existing_rss
    require 'rss'

    items = []
    if File.exists? rss_file
      ::RSS::Parser.parse(rss_file).items.each do |item|
        items << {
          :title => item.title,
          :link => item.link,
          :pubDate => item.pubDate,
          :description => item.description,
          :author => item.author,
          :guid => item.guid.content
        }
      end
    else
      say '[ERROR] RSS file does not currently exist', :red
    end

    items
  end

  def puts_rss(items)
    items.each do |item|
      puts "  #{item[:title]}"
    end
  end

  def rss_dry_run(new_items)
    say 'New RSS will be:', :yellow
    puts_rss new_items
    say 'To write the file and push to GHE, rerun this command with --confirm', :yellow
  end

  def write_rss!(new_items)
    require 'bundler/setup'
    require 'builder'

    xml = Builder::XmlMarkup.new( :indent => 2 )
    new_feed = xml.instruct!

    xml.rss :version => '2.0', 'xmlns:atom' => 'http://www.w3.org/2005/Atom' do
      xml.channel do
        xml.title 'Guides and Tutorials'
        xml.link library_url
        xml.description 'Linux guides and technical documentation from Linode'
        xml.category 'Computers', :domain => 'http://www.dmoz.org'
        xml.language 'en-us'
        xml.lastBuildDate Time.now.rfc2822
        xml.tag! 'atom:link', :rel => 'self', :type => 'application/rss+xml', :href => File.join(library_url, 'rss')
        xml.docs 'http://www.rssboard.org/rss-specification'
        xml.copyright "Copyright © 2009-#{Date.today.year} Linode, LLC. All rights reserved."

        xml.image do
          xml.url File.join library_url, 'images/rss/logo.png'
          xml.title 'Guides and Tutorials'
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

  def push!(new_items)
    msg = new_items.map { |item| item[:title] }.join ', '
    system %(cd #{rss_dir}; git commit -am "Add: #{msg}"; git push origin master)
  end
end

