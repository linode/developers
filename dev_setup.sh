if
  cd themes/linode-hugo-theme; then
  git pull origin development; else
  cd themes/ && git clone git@github.com:linode/linode-hugo-theme.git; 
fi