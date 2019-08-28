BLUE='\033[0;34m'
NC='\033[0m' # No Color

SPEC_FILE=""
if [ -n ${1} ]; then
  SPEC_FILE=${1}
  echo $([ -f $SPEC_FILE ])
fi

echo
echo "${BLUE}Fetching base theme${NC}"
if
  cd linode-hugo-theme; then
  git pull origin development; else
  git clone https://github.com/linode/linode-hugo-theme.git;
fi

if [ -f "$SPEC_FILE" ]; then
  echo
  echo "${BLUE}Using local spec file at: ${SPEC_FILE}${NC}"
  cat $SPEC_FILE > ../static/api/docs/v4/openapi.yaml;
else
  echo
  echo "${BLUE}Fetching API specs${NC}"
  cd -
  curl https://raw.githubusercontent.com/linode/linode-api-docs/master/openapi.yaml > ../static/api/docs/v4/openapi.yaml;
fi


echo
echo "${BLUE}Removing faulty data${NC}"
sed -i.bak '/backgroundColor:/d' ../static/api/docs/v4/openapi.yaml
rm ../static/api/docs/v4/openapi.yaml.bak

echo
echo "${BLUE}Converting YAML to JSON${NC}"
../node_modules/yamljs/bin/yaml2json ../static/api/docs/v4/openapi.yaml > ../static/api/docs/v4/spec.json
