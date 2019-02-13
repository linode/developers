module.exports = {
  siteMetadata: {
    title: `Linode Developer Tools`,
    description: `Linode API Documentation, Guides, and Tools`,
    menuLinks: [
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
        link: "/changelog"
      }
    ]
  },
  plugins: [
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
        develop: true,
        tailwind: true,
        whitelist: ["mobile-nav", "active", "error", "open"],
        purgeOnly: ["src/css/main.css"] // Purge only tailwind
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
