BLUE='\033[0;34m'
NC='\033[0m' # No Color

SPEC_FILE=""
if [ -n ${1} ]; then
  SPEC_FILE=${1}
  echo $([ -f $SPEC_FILE ])
fi

echo
printf "${BLUE}Fetching base theme${NC}\n"
if
  cd linode-hugo-theme; then
  git pull origin development; else
  git clone https://github.com/linode/linode-hugo-theme.git;
fi

if [ -f "$SPEC_FILE" ]; then
  echo
  printf "${BLUE}Using local spec file at: ${SPEC_FILE}${NC}\n"
  cat $SPEC_FILE > static/api/docs/v4/openapi.yaml;
else
  echo
  printf "${BLUE}Fetching API specs${NC}\n"
  cd -
  curl https://raw.githubusercontent.com/linode/linode-api-docs/master/openapi.yaml > static/api/docs/v4/openapi.yaml;
fi


echo
printf "${BLUE}Removing faulty data${NC}\n"
sed -i.bak '/backgroundColor:/d' static/api/docs/v4/openapi.yaml
rm static/api/docs/v4/openapi.yaml.bak

echo
printf "${BLUE}Converting YAML to JSON${NC}\n"
node_modules/yamljs/bin/yaml2json static/api/docs/v4/openapi.yaml > static/api/docs/v4/spec.json
