class Default
  desc 'publish', '!DANGER! Build/deploy the docs on all production docs boxes'
  def publish
    require 'bundler/setup'
    require 'net/ssh'
    require 'json'

    config_file = 'publish.config.json'.freeze
    config = JSON.parse(File.read(config_file)).freeze

    user_name = config['user_name'].freeze
    library_dir = config['library_dir'].freeze
    thor_bin = config['thor_bin'].freeze

    config['hosts'].each do |host|
      log "Deploying to #{host}. This might take a while..."

      begin
        Net::SSH.start(host, user_name, :forward_agent => true) do |ssh|
          unless ssh.exec!("pgrep -f 'thor deploy'").to_s.empty?
            say '   thor deploy is already running, skipping this box', :red
          else
            output = ssh.exec! "cd #{library_dir} && #{thor_bin} upgrade && #{thor_bin} deploy"
            puts output
          end
        end
      rescue Net::SSH::AuthenticationFailed
        say '   [ERROR] Could not authenticate. Are you keyed?', :red
      end
    end

  end
end
