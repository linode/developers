require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Linode Developer Tools`,
    description: `Linode API Documentation, Guides, and Tools`,
    dlcLinks: [
      {
        name: "API Documentation",
        link: "http://www.linode.com/docs/api"
      },
      {
        name: "Guides",
        link: "/guides"
      },
      {
        name: "Libraries & Tools",
        link: "/libraries-tools"
      },
      {
        name: "Changelog",
        link: "/changelog/"
      }
    ]
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GTM_CONTAINER_ID,

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" }
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/index.js`,
        options: {
          manualInit: true
        }
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ccc`,
        theme_color: `#666`,
        display: `minimal-ui`,
        icon: `src/images/logo.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/images/svgs`
        }
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        whitelistPatternsChildren: [
          /consent_blackbar/,
          /cookie-prefs-icon/,
          /c-featured/,
          /c-notification/,
          /has-banner/,
          /o-menu/
        ],
        whitelist: [
          "mobile",
          "mobile-nav",
          "sign-up",
          "active",
          "active-item",
          "error",
          "open",
          "table",
          "tbody",
          "thead",
          "th",
          "td"
        ],
        purgeOnly: ["src/css/main.css"], // Purge only tailwind
        develop: true
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/static/api/docs/v4`
      }
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [
          `name`,
          `getSummary`,
          `putSummary`,
          `postSummary`,
          `deleteSummary`
        ],
        resolvers: {
          Paths: {
            name: node => node.name,
            getSummary: node => node["get"] && node["get"].summary,
            putSummary: node => node["put"] && node["put"].summary,
            postSummary: node => node["post"] && node["post"].summary,
            deleteSummary: node => node["delete"] && node["delete"].summary
          }
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
