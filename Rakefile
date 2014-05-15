desc "Builds LESS"
task :less do
  require 'less'

  parser = Less::Parser.new :paths => 'source/stylesheets', :filename => '_home.less'
  css = ''

  File.open 'source/stylesheets/_home.less' do |f|
    css = parser.parse(f.read).to_css(:compress => true)
  end

  File.open('source/stylesheets/home.css', 'w') do |f|
    f.write css
  end
end

task :default => [:less]