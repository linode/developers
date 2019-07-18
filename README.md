# DLC Built with Gatsby

The developers.linode.com website built with Gatsby and including the API Docs

## Setup

`yarn`

`yarn develop`

you may need to install the Gatsby CLI as well `npm install -g gatsby-cli`

Check out the site at http://localhost:8000/

### Build

The API documentation in this site is also indexed in Algolia, so that
it can be searched across Linode's services. The scripts for this are
located in the `/search` directory. In order to run them correctly,
you will need to create a `.env` file in the root directory with the 
following values:

ALGOLIA_API_KEY=(your key here)
ALGOLIA_API_SECRET=(your secret here)