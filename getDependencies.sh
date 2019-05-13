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
cd -
curl https://developers.linode.com/api/docs/v4/openapi.yaml > src/data/openapi.yaml

echo
echo "${BLUE}Removing faulty data${NC}"
sed -i '/backgroundColor:/d' src/data/openapi.yaml

echo
echo "${BLUE}Converting YAML to JSON${NC}"
npm install -g yamljs
yaml2json src/data/openapi.yaml > src/data/spec.json
