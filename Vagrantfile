Vagrant.configure(2) do |config|
  config.vm.network "forwarded_port", guest: 4567, host: 4567
  config.vm.box = "bento/debian-8.2"

  config.vm.synced_folder "salt/", "/srv/salt/"

  config.vm.provision :salt do |salt|
    salt.run_highstate = true
    salt.verbose = true
    salt.colorize = true
    salt.masterless = true
    salt.log_level = 'warning'
  end
end
