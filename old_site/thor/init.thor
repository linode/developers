class Default
  desc 'init', 'Install dependencies and clone the library'
  def init
    log 'Installing dependencies...'
    system 'bundle install --deployment'

    library_dir = 'source'
    unless Dir.exists? library_dir
      log 'Getting latest version of the Library...'
      system "git clone https://github.com/linode/docs.git #{library_dir}"
    end

    rss_dir = 'pages/docs/rss'
    unless Dir.exists? rss_dir
      log 'Getting the latest RSS feed...'
      system "git clone https://github.com/Linode/docs-rss.git #{rss_dir}"
    end
  end
end
