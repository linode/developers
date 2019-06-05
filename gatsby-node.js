const JsonSchemaRefParser = require("json-schema-ref-parser");
const path = require("path");
const _ = require("lodash");
const fs = require("fs");
const { jsonToGraphQLQuery } = require("json-to-graphql-query");

const specs = require("./src/data/spec.json");
const crypto = require("crypto");
const parser = new JsonSchemaRefParser();

// new Promise((resolve, reject) => {
//   resolve(parser.dereference(specs));
// }).then(result => {
//   const query = jsonToGraphQLQuery(result, {
//     pretty: true,
//     includeFalsyKeys: true
//   });
//   const fileName = "./src/data/query.txt";
//   const file = fs.createWriteStream(fileName);
//   file.write(
//     query
//       .replace(/\//g, "")
//       .replace(/\-/g, "_")
//       .replace(/200/g, "_200")
//       .replace(/204/g, "_204")
//       .replace(/\b([{()}])/g, "")
//       .toLowerCase()
//   );
// });

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;
  const res = await parser.dereference(specs);

  // map into these results and create nodes
  Object.keys(res.paths).map((path, i) => {
    // Create your node object
    const modes = {
      get: "get",
      post: "post",
      put: "put",
      delete: "delete"
    };
    const pathNode = {
      // Required fields
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `Paths` // name of the graphQL query --> allRandomUser {}
        // contentDigest will be added just after
        // but it is required
      },
      children: [],

      // Other fields that you want to query with graphQl
      name: path,
      get: res.paths[path].get,
      post: res.paths[path].post,
      put: res.paths[path].put,
      delete: res.paths[path].delete,
      responses: res.paths[path].responses,
      requestBody: res.paths[path].requestBody,
      parameters: res.paths[path].parameters,
      tagGroup:
        (res.paths[path]["get"] && res.paths[path]["get"].tags) ||
        (res.paths[path]["put"] && res.paths[path]["put"].tags) ||
        (res.paths[path]["post"] && res.paths[path]["post"].tags) ||
        (res.paths[path]["delete"] && res.paths[path]["delete"].tags)
    };

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(pathNode))
      .digest(`hex`);
    // add it to userNode
    pathNode.internal.contentDigest = contentDigest;

    const query = jsonToGraphQLQuery(res.paths[path], {
      pretty: true,
      includeFalsyKeys: true
    });
    const fileName = `./src/data/${_.kebabCase(path)}.txt`;
    const file = fs.createWriteStream(fileName);
    file.write(
      query
        .replace(/\//g, "")
        .replace(/\-/g, "_")
        .replace(/200/g, "_200")
        .replace(/204/g, "_204")
        .replace(/\b([{()}])/g, "")
        .toLowerCase()
    );

    // Create node with the gatsby createNode() API
    createNode(pathNode);
  });

  return;
};

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

  const specsPages = await graphql(`
    {
      allPaths {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    const res = result.data.allPaths.edges;
    let paths = [];
    _.each(res, edge => {
      if (_.get(edge, "node.name")) {
        paths = paths.concat(edge.node.name);
      }
    });
    paths = _.uniq(paths);
    paths.forEach(name => {
      createPage({
        path: `api/v4/${_.kebabCase(name)}`,
        component: apiTemplate,
        context: {
          name
        }
      });
    });
  });

  return Promise.all([changelogs, specsPages]);
};
