class Default
  desc 'deploy', 'Pull down changes and build the library'
  def deploy
    log 'Getting library changes...'
    system 'cd source && git pull git@github.com:Linode/library.git master'

    log 'Building library...'
    system 'bundle exec middleman build'
  end
end
