#!/usr/bin/env bash

BLUE='\033[0;34m'
NC='\033[0m' # No Color

SPEC_BRANCH="master"
if [[ "$GIT_LOCAL_BRANCH" =~ ^(master|development)$ ]]; then
  SPEC_BRANCH="${GIT_LOCAL_BRANCH}"
fi

SPEC_FILE=""
if [ -n ${1} ]; then
  SPEC_FILE=${1}
  [[ -f $SPEC_FILE ]] && echo "$SPEC_FILE"
fi

echo
printf "${BLUE}Fetching base theme${NC}\n"
if
  cd linode-hugo-theme; then
  git pull origin development; else
  git clone https://github.com/linode/linode-hugo-theme.git;
fi

if [[ -f "$SPEC_FILE" ]]; then
  echo
  printf "${BLUE}Using local spec file at: ${SPEC_FILE}${NC}\n"
  cat $SPEC_FILE > ../static/api/docs/v4/openapi.yaml;
  cd -
else
  echo
  printf "${BLUE}Fetching API specs${NC}\n"
  cd -
  curl "https://raw.githubusercontent.com/linode/linode-api-docs/release-4.163.0/openapi.yaml" > static/api/docs/v4/openapi.yaml;
fi

echo
printf "${BLUE}Removing faulty data${NC}\n"
sed -i.bak '/backgroundColor:/d' static/api/docs/v4/openapi.yaml
rm static/api/docs/v4/openapi.yaml.bak

echo
printf "${BLUE}Converting YAML to JSON${NC}\n"
node_modules/yamljs/bin/yaml2json static/api/docs/v4/openapi.yaml > static/api/docs/v4/spec.json
# some data manipulation to fix the result of the conversion above
sed -i.bak 's@\\\\[[:space:]]@\\\\\\n @g' static/api/docs/v4/spec.json
rm static/api/docs/v4/spec.json.bak
