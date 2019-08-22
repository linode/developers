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
curl https://raw.githubusercontent.com/linode/linode-api-docs/development/openapi.yaml > static/api/docs/v4/openapi.yaml

echo
echo "${BLUE}Removing faulty data${NC}"
sed -i.bak '/backgroundColor:/d' static/api/docs/v4/openapi.yaml
rm static/api/docs/v4/openapi.yaml.bak

echo
echo "${BLUE}Converting YAML to JSON${NC}"
./node_modules/yamljs/bin/yaml2json static/api/docs/v4/openapi.yaml > static/api/docs/v4/spec.json
