class Default
  desc 'deploy', 'Pull down changes and build the docs'
  def deploy
    log 'Getting docs changes...'
    system 'cd source && git pull origin'

    log 'Getting RSS changes...'
    system 'cd pages/docs/rss; git pull --rebase origin master'

    log 'Building docs...'
    system 'bundle exec middleman build'
  end
end
