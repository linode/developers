class Default
  desc 'init', 'Install dependencies and clone the library'
  def init
    log 'Installing dependencies...'
    system 'bundle install --deployment'

    library_dir = "source"
    unless Dir.exists? library_dir
      log 'Getting latest version of the Library...'
      system "git clone git@github.com:Linode/library.git #{library_dir}"
    end
  end
end
