class Default
  desc 'old -m [months]', 'List articles older than the specified number of months'
  option :m, :type => :numeric
  option :d, :type => :boolean
  def old
    require 'yaml'

    Dir['source/docs/**/*.md'].each do |article_path|
      begin
        article_meta = YAML.load File.read(article_path)
        date = Date.parse article_meta['modified']
        if !article_meta['deprecated'] || options[:d]
          puts "#{article_meta['title']} (#{date})" if date < Date.today << options[:m]
        end
      rescue
        next
      end
    end
  end
end
