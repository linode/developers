class Default
  desc 'blame', 'List articles published since -m MONTHS from today, by -a AUTHOR. Use -d to include deprecated guides.'
  option :months, :aliases =>  :m , :required => true, :type => :numeric, :banner => 'MONTHS', :desc => 'How many MONTHS from today you wish to look at'
  option :author, :aliases =>  :a , :required => true, :type => :string, :desc => 'The AUTHOR of the Docs you care about. Can be a partial match and is case-insensitive'
  option :deprecated, :alias => :d, :type => :boolean, :desc => 'Should deprecated docs be included?, Default is no'

  def blame
    require 'yaml'

    results = Array.new

    Dir['source/docs/**/*.md'].each do |article_path|
      begin
        article_meta = YAML.load File.read(article_path)
        date = Date.parse article_meta['published']
        author = article_meta['author']['name']

        if !article_meta['deprecated'] || options[:deprecated]
            if author =~ /#{options[:author]}/i
                if date >= Date.today << options[:months]
                  results << "#{date}, #{author}, #{article_meta['title']}"
                end
            end
        end
      rescue
        next
      end
    end

    puts results.sort
  end
end
