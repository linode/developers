class Default
  desc 'upgrade', 'Update to the latest version of docsmith'
  def upgrade
    log 'Pulling the latest version of docsmith...'
    system 'git pull git@github.com:Linode/docsmith.git master'

    log 'Pulling the latest RSS...'
    system 'pushd pages/docs/rss && git pull origin master && popd'

    log 'Updating dependencies...'
    system 'bundle install --deployment'
  end
end
