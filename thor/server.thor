class Default
  desc 'server', 'Start a local docsmith development server'
  def server
    log 'Starting docsmith development server...'
    system 'bundle exec middleman server --reload-paths=lib,lib/partials,lib/layouts,lib/assets/stylesheets'
  end
end