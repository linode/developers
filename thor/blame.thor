class Default
  desc 'old -m [months] -a [author] -d', 'List articles published within the specified date range from today, by the specified author. Use -d to include deprecated guides.'
  option :m, :type => :numeric
  option :d, :type => :boolean
  option :a, :type => :string
  def blame
    require 'yaml'

    results = Array.new

    Dir['source/docs/**/*.md'].each do |article_path|
      begin
        article_meta = YAML.load File.read(article_path)
        date = Date.parse article_meta['published']
        author = article_meta['author']['name']
        if !article_meta['deprecated'] || options[:d]
            if date >= Date.today << options[:m] && author == options[:a]
              results << "#{date}, #{author}, #{article_meta['title']}"
            end
        end
      rescue
        next
      end
    end

    puts results.sort
  end
end
