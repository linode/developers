require 'yaml'

class Search < Thor
  @@output = Array.new

  class_option :deprecated, :aliases => '-d', :type => :boolean, :desc => 'Should deprecated docs be included? (Defaults to false)'
  class_option :tabs,       :aliases => '-t', :type => :boolean, :desc => 'Use a tab delimiter. (Defaults to a ",")'
  class_option :blame,      :aliases => '-b', :type => :string,  :desc => 'The Author of the Docs. Can be a partial match and is case-insensitive', :banner => 'AUTHOR'

  desc 'new', 'List articles newer than the specified number of months'
  option :months, :aliases => '-m', :type => :numeric, :desc => 'How many months to search', :banner => 'MONTHS', :required => true
  def new
    search :new
  end

  desc 'old', "List articles older than the specified number of months"
  option :months, :aliases => '-m', :type => :numeric, :desc => 'How many months to search', :banner => 'MONTHS', :required => true
  def old
    search :old
  end

  private

  def search(type)
    forEachDoc do |date, author, meta|

      case type
        when :new
          [ date, author, meta['title'] ] if date >= Date.today << options[:months]

        when :old
          [ date, author, meta['title'] ] if date < Date.today << options[:months]
      end
    end

    print_output
  end

  def delim
    options[:tabs] ? "\t" : ", "
  end

  # Takes a block and stores the result into the instance method @output
  # The returned value from the block must be an array
  def forEachDoc
    Dir['source/docs/**/*.md'].each do |article_path|
      begin
        article_meta = YAML.load File.read(article_path)
        date = Date.parse article_meta['modified']
        author = article_meta['author']['name']

        if !article_meta['deprecated'] || options[:deprecated]
            if options[:blame]
              value = yield(date, author, article_meta) if author =~ /#{options[:blame]}/i
            else
              value = yield(date, author, article_meta)
            end

            @@output << value if value
        end
      rescue
        next
      end
    end
  end

  # Takes an options column to sort by
  def print_output(column=0)
    @@output.sort_by! { |elem| elem[column] }

    @@output.each do |line|
      puts line.join(delim)
    end
  end

end
