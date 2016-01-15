class Default
  desc 'new -m [months]', 'List articles newer than the specified number of months'
  option :m, :type => :numeric
  option :d, :type => :boolean
  option :t, :type => :boolean,:desc => 'Use tab delimiter (defaults to comma)'
  def new
    require 'yaml'

    results = Array.new

    delim = options[:t] ? "\t" : ','

    Dir['source/docs/**/*.md'].each do |article_path|
      begin
        article_meta = YAML.load File.read(article_path)
        date = Date.parse article_meta['published']
        if !article_meta['deprecated'] || options[:d]
          results << "#{date}#{delim} #{article_meta['author']['name']}#{delim} #{article_meta['title']}" if date >= Date.today << options[:m]
        end
      rescue
        next
      end
    end
    puts results.sort
  end
end
