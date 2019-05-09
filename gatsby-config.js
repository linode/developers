module.exports = {
  siteMetadata: {
    title: `Linode Developer Tools`,
    description: `Linode API Documentation, Guides, and Tools`,
    mainSiteGlobalMenu: [
      {
        name: "Engage",
        link: "#"
      },
      {
        name: "Support",
        link: "#"
      },
      {
        name: "Log In",
        link: "#"
      },
      {
        name: "Sign Up",
        link: "#"
      }
    ],
    mainSiteNav: [
      {
        name: "Why Linode",
        link: "#"
      },
      {
        name: "Products",
        link: "#"
      },
      {
        name: "Solutions",
        link: "#"
      },
      {
        name: "Docs",
        link: "#"
      },
      {
        name: "Pricing",
        link: "#"
      },
      {
        name: "Partners",
        link: "#"
      }
    ],
    dlcLinks: [
      {
        name: "API Documentation",
        link: "/api/v4"
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
        name: "Kubernetes",
        link: "/kubernetes"
      },
      {
        name: "Changelog",
        link: "/changelog/"
      }
    ]
  },
  plugins: [
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
        whitelist: [
          "mobile-nav",
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
        path: `${__dirname}/src/data`
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
