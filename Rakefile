desc 'Compiles LESS from source/stylesheets into home.css'
task :less do
  require 'bundler/setup'
  require 'less'

  puts ' * Compiling LESS'

  parser = Less::Parser.new :paths => 'source/stylesheets', :filename => '_home.less'
  css = ''

  File.open 'source/stylesheets/_home.less' do |f|
    css = parser.parse(f.read).to_css(:compress => true)
  end

  File.open 'source/stylesheets/home.css', 'w' do |f|
    f.write css
  end
end

desc 'Install dependencies and clone the library'
task :install do
  puts ' * Installing dependencies...'
  sh 'bundle install --deployment'

  library_dir = "source/library"
  unless Dir.exists? library_dir
    puts ' * Getting latest version of the Library...'
    sh "git clone git@github.com/displague/library.git #{library_dir}"
  end
end

desc 'Update to the latest version of docsmith'
task :update do
  puts ' * Pulling the latest version of docsmith...'
  sh 'git pull origin master'

  puts ' * Updating dependencies...'
  sh 'bundle install --deployment'
end

desc 'Start a local docsmith development server'
task :server do
  puts ' * Starting docsmith development server...'
  sh 'bundle exec middleman server'
end

task :default => [:less]