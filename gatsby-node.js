const path = require("path");
const _ = require("lodash");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const changelogTemplate = path.resolve(
    "src/components/5_templates/changelogs.js"
  );
  const apiTemplate = path.resolve("src/components/5_templates/api.js");

  const changelogs = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            frontmatter {
              changelog
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;
    let tags = [];
    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.changelog")) {
        tags = tags.concat(edge.node.frontmatter.changelog);
      }
    });
    // Eliminate duplicate tags
    tags = _.uniq(tags);

    // Make tag pages
    tags.forEach(changelog => {
      createPage({
        path: `/changelog/${_.kebabCase(changelog)}/`,
        component: changelogTemplate,
        context: {
          changelog
        }
      });
    });
  });

  const specs = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              changelog
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const specsapi = require("./src/data/spec.json");

    Object.keys(specsapi.paths).forEach(name => {
      createPage({
        path: `api/v4${name}`,
        component: apiTemplate,
        context: {
          name
        }
      });
    });
  });

  return Promise.all([changelogs, specs]);
};
