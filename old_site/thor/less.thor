class Default
  desc 'less', 'Compiles LESS from source/stylesheets into home.css'
  def less
    require 'bundler/setup'
    require 'less'

    log 'Compiling LESS...'

    parser = Less::Parser.new :paths => 'lib/assets/stylesheets', :filename => '_home.less'
    css = ''

    File.open 'lib/assets/stylesheets/_home.less' do |f|
      css = parser.parse(f.read).to_css(:compress => true)
    end

    File.open 'lib/assets/stylesheets/home.css', 'w' do |f|
      f.write css
    end
  end
end