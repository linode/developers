class Default
  desc 'deploy', 'Pull down changes and build the library'
  def deploy
    # XXX FIXME make sure this is pulling from the right repo
    log 'Getting library changes...'
    system 'cd source && git pull origin master'

    log 'Building library...'
    system 'bundle exec middleman build'
  end
end
