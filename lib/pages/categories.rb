module Docsmith
  module Pages
    def self.categories(current_page)
      { :uncategorized_articles => self.uncategorized_articles(current_page), :categories => self.categorized_articles(current_page) }
    end

    private
    def self.get_base_path(current_page)
      "source#{current_page.url}"
    end

    def self.uncategorized_articles(current_page)
      base_path = get_base_path current_page
      uncategorized_articles = []

      # Uncategorized articles
      (current_page.data.featured || Dir.glob("#{base_path}*").reject {|f| File.directory? f or File.basename(f) == 'index.md' }).each do |article|

        if File.exists? File.join(base_path, article, 'index.md')
          # featured directory
          article_filename = File.join(article,'index')
          article_contents = File.read File.join(base_path, "#{article_filename}.md")
        else
          article_filename = File.basename(article, '.md')
          article_contents = File.read "#{base_path}#{article_filename}.md"
        end

        url = "#{current_page.url}#{article_filename}".gsub(/index$/, '')

        meta = YAML.load(article_contents).merge({ 'url' => url })
        uncategorized_articles << meta unless meta['deprecated']
      end

      uncategorized_articles
    end

    def self.categorized_articles(current_page)
      base_path = get_base_path current_page
      categories = []

      (current_page.data.categories || Dir.glob("#{base_path}*").select {|f| File.directory? f }).each do |category|

        sub_category_dir = File.basename(category)
        sub_category_index = "#{base_path}#{sub_category_dir}/index.md"
        category_title = sub_category_dir.capitalize
        category_meta = File.exists?(sub_category_index) ? YAML.load(File.read(sub_category_index)) : {}

        articles = []
        (category_meta['featured'] || Dir.glob("#{base_path}#{sub_category_dir}/*.md")).each do |article|
          article_filename = File.basename(article, '.md')
          article_contents = File.read "#{base_path}#{sub_category_dir}/#{article_filename}.md"
          url = "#{current_page.url}#{sub_category_dir}/#{article_filename}".gsub(/index$/, '')

          if (yaml = YAML.load article_contents)
            meta = yaml.merge({ 'url' => url })
            unless article_filename == 'index'
              articles << meta unless meta['deprecated']
            else
              category_title = meta['title'] if meta['title']
            end
          end
        end

        categories << {
          :url => "#{current_page.url}#{sub_category_dir}/",
          :title => category_title,
          :articles => articles,
          :sub_category_dir => sub_category_dir,
          :description => category_meta['description']
        } unless articles.empty?
      end

      categories
    end
  end
end

