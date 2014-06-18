class Default
  desc 'update', 'Update to the latest version of docsmith'
  def update
    log 'Pulling the latest version of docsmith...'
    system 'git pull origin master'

    log 'Updating dependencies...'
    system 'bundle install --deployment'
  end
end