class Default < Thor
  private
  def log(string)
    say " * #{string}", :yellow
  end
end

Dir.glob("thor/**/*.thor") do |task|
  Thor::Util.load_thorfile(task)
end
