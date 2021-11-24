# DLC Built with Gatsby

The developers.linode.com website built with Gatsby and including the API Docs

## Setup

DLC currently needs `node v12.20.2` to build properly. You may want to use NVM to manage your versions (https://github.com/nvm-sh/nvm/blob/master/README.md)

`yarn`

`yarn develop`

you may need to install the Gatsby CLI as well `npm install -g gatsby-cli`

Check out the site at http://localhost:8000/

If you'd like to use a local YAML file to build the API docs, run:

`yarn develop [relative-path-to-your-local-YAML-file]`

ex: `yarn develop ../linode-api-docs/openapi.yaml`

### Build

The API documentation in this site is also indexed in Algolia, so that
it can be searched across Linode's services. The scripts for this are
located in the `/search` directory. In order to run them correctly,
you will need to create a `.env` file in the root directory with the
following values:

ALGOLIA_API_KEY=(your key here)
ALGOLIA_API_SECRET=(your secret here)
