$script = <<SCRIPT
  echo "Starting docsmith.."

  cd /vagrant && thor server > /dev/null 2>&1 &

  start=`date +%s`

  while [ $((`date +%s` - start)) -lt 120 ]; do
    sleep 1
    status=`curl -s -o /dev/null -I -w "%{http_code}" http://localhost:4567`
    if [ $status -eq 200 ]; then
      echo "docsmith is running on http://$(hostname -I | cut -d' ' -f1):4567"
      exit 0
    fi
  done

  echo "Timeout elapsed, docsmith may have failed to start."
  exit 1
SCRIPT

Vagrant.configure(2) do |config|
  config.vm.network "forwarded_port", guest: 4567, host: 4567
  config.vm.box = "bento/debian-8.7"

  config.vm.synced_folder "salt/", "/srv/salt/"

  config.ssh.forward_agent = true

  config.vm.provision :salt do |salt|
    salt.run_highstate = true
    salt.verbose = true
    salt.colorize = true
    salt.masterless = true
    salt.log_level = 'warning'
  end

  config.vm.provision :shell, run: 'always' do |s|
    s.privileged = false
    s.inline = $script
  end
end
