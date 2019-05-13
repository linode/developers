BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo
echo "${BLUE}Fetching base theme${NC}"
if
  cd linode-hugo-theme; then
  git pull origin development; else
  git clone https://github.com/linode/linode-hugo-theme.git;
fi

echo
echo "${BLUE}Fetching API specs${NC}"
curl -O-o ./src/data/spec.yaml https://developers.linode.com/api/docs/v4/openapi.yaml