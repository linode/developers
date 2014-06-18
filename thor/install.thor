class Default
  desc 'install', 'Install dependencies and clone the library'
  def install
    log 'Installing dependencies...'
    system 'bundle install --deployment'

    library_dir = "source"
    unless Dir.exists? library_dir
      log 'Getting latest version of the Library...'
      system "git clone git@github.com/displague/library.git #{library_dir}"
    end
  end
end