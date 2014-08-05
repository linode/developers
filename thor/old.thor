class Default
  desc 'old -m [months]', 'List articles older than the specified number of months'
  option :m, :type => :numeric
  def old
    require 'yaml'

    Dir['source/docs/**/*.md'].each do |article_path|
      begin
        article_meta = YAML.load File.read(article_path)
        date = Date.parse article_meta['modified']
        puts "#{article_meta['title']} (#{date})" if date < Date.today << options[:m]
      rescue
        next
      end
    end
  end
end
