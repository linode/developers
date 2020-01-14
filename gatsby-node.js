const JsonSchemaRefParser = require("json-schema-ref-parser");
const path = require("path");
const _ = require("lodash");
const fs = require("fs");
const axios = require("axios");

const specs = require("./static/api/docs/v4/spec.json");
const crypto = require("crypto");
const parser = new JsonSchemaRefParser();

const { recursiveQuery } = require("./generateQuery.js");

exports.sourceNodes = async ({ actions }) => {
  const { createNode, createTypes } = actions;

  // This parser allows compiling the JSON object into a valid
  // OpenAPI object (parsing $refs etc)
  const res = await parser.dereference(specs);

  // CREATING NODES FROM API SPECS

  // Type definitions for GraphQL
  // We force define these types to avoid build errors
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter!
    }

    type Frontmatter {
      date: Date! @dateformat
      author: String!
    }
  `;

  createTypes(typeDefs);

  const allSpecs =
    // create endpoints map
    Object.keys(res.paths).map(async (path, i) => {
      // Create your node object
      const pathNode = {
        // Required fields
        id: `${i}`,
        parent: `__SOURCE__`,
        internal: {
          type: `Paths` // name of the graphQL query --> allPaths {}
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

      // Create node with the gatsby createNode() API
      createNode(pathNode);
    });

  // CREATING MENU NODES FROM WP API
  // This will gather the WP API from linode.com to build the header menu items
  const baseUrl = "https://linode.com/wp-json/menus/v1/menus";
  const wpMenus = [
    {
      path: `${baseUrl}/header-utility`,
      name: "HeaderUtility"
    },
    {
      path: `${baseUrl}/header-primary`,
      name: "HeaderPrimary"
    },
    {
      path: `${baseUrl}/submenu-why-linode-primary`,
      name: "WhyPrimary"
    },
    {
      path: `${baseUrl}/submenu-why-linode-services`,
      name: "WhyServices"
    },
    {
      path: `${baseUrl}/submenu-products-featured`,
      name: "ProductsFeatured"
    },
    {
      path: `${baseUrl}/submenu-products-compute`,
      name: "ProductsCompute"
    },
    {
      path: `${baseUrl}/submenu-products-storage`,
      name: "ProductsStorage"
    },
    {
      path: `${baseUrl}/submenu-products-services`,
      name: "ProductsServices"
    },
    {
      path: `${baseUrl}/submenu-products-networking`,
      name: "ProductsNetworking"
    },
    {
      path: `${baseUrl}/submenu-products-developer-tools`,
      name: "ProductsDevTools"
    },
    {
      path: `${baseUrl}/submenu-community-primary`,
      name: "CommunityPrimary"
    },
    {
      path: `${baseUrl}/submenu-community-secondary`,
      name: "CommunityServices"
    },
    {
      path: `${baseUrl}/submenu-mobile-primary`,
      name: "PrimaryMobile"
    },
    {
      path: `${baseUrl}/submenu-mobile-utility`,
      name: "UtilityMobile"
    }
  ];

  const allMenus = wpMenus.map(async menu => {
    const endpoint = () => axios.get(menu.path);
    // await for results
    const list = await endpoint();

    list.data.items.map((menuItem, i) => {
      // Create your node object
      const itemNode = {
        // Required fields
        id: `${i}`,
        parent: `__SOURCE__`,
        internal: {
          type: menu.name
        },
        children: [],
        title: menuItem.title,
        url: menuItem.url,
        switch_on: menuItem.switch_on ? menuItem.switch_on : undefined,
        description: menuItem.description ? menuItem.description : undefined,
        icon: menuItem.icon ? menuItem.icon : undefined
      };

      // Get content digest of node. (Required field)
      const contentDigest = crypto
        .createHash(`md5`)
        .update(JSON.stringify(itemNode))
        .digest(`hex`);
      // add it to userNod  e
      itemNode.internal.contentDigest = contentDigest;

      // Create node with the gatsby createNode() API
      return createNode(itemNode);
    });
  });

  return Promise.all(allMenus, allSpecs);
};

// GENERATE CHANGELOG ENTRIES
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

    // Make changelog pages
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

  // CREATE FRAGMENTS
  const fragmentQueries = [
    {
      path: "PathsGetResponses_200ContentApplication_jsonSchemaProperties",
      name: "getProperties"
    },
    {
      path: "PathsPostRequestBodyContentApplication_jsonSchemaProperties",
      name: "postRequestBody"
    },
    {
      path: "PathsPostRequestBodyContentApplication_jsonSchemaAllOfProperties",
      name: "allOfPostRequestBody"
    },
    {
      path: "PathsPostResponses_200ContentApplication_jsonSchemaProperties",
      name: "postProperties"
    },
    {
      path: "PathsPutRequestBodyContentApplication_jsonSchemaProperties",
      name: "putRequestBody"
    },
    {
      path: "PathsPutRequestBodyContentApplication_jsonSchemaAllOfProperties",
      name: "allOfputRequestBody"
    },
    {
      path: "PathsPutResponses_200ContentApplication_jsonSchemaProperties",
      name: "putProperties"
    }
  ];

  const fragments = [];

  // GraphQL introspection query
  // Not sure if there's a better way top generate a recursive pattern here,
  // but this code makes sure we good deep enough into the data
  await fragmentQueries.map(q => {
    let partialFragments = graphql(`
    {
      __type(
        name: "${q.path}"
      ) {
        name
        fields {
          name
          type {
            ofType {
              name
              fields {
                name
                type {
                  fields {
                    name
                    type {
                      fields {
                        name
                        type {
                          fields {
                            name
                            type {
                              fields {
                                name
                                type {
                                  fields {
                                    name
                                    type {
                                      fields {
                                        name
                                        type {
                                          fields {
                                            name
                                            type {
                                              fields {
                                                name
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            fields {
              name
              type {
                ofType {
                  name
                  fields {
                    name
                    type {
                      fields {
                        name
                        type {
                          fields {
                            name
                            type {
                              fields {
                                name
                                type {
                                  fields {
                                    name
                                    type {
                                      fields {
                                        name
                                        type {
                                          fields {
                                            name
                                            type {
                                              fields {
                                                name
                                                type {
                                                  fields {
                                                    name
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                fields {
                  name
                  type {
                    ofType {
                      name
                      fields {
                        name
                        type {
                          fields {
                            name
                            type {
                              fields {
                                name
                                type {
                                  fields {
                                    name
                                    type {
                                      fields {
                                        name
                                        type {
                                          fields {
                                            name
                                            type {
                                              fields {
                                                name
                                                type {
                                                  fields {
                                                    name
                                                    type {
                                                      fields {
                                                        name
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    fields {
                      name
                      type {
                        ofType {
                          name
                          fields {
                            name
                            type {
                              fields {
                                name
                                type {
                                  fields {
                                    name
                                    type {
                                      fields {
                                        name
                                        type {
                                          fields {
                                            name
                                            type {
                                              fields {
                                                name
                                                type {
                                                  fields {
                                                    name
                                                    type {
                                                      fields {
                                                        name
                                                        type {
                                                          fields {
                                                            name
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        fields {
                          name
                          type {
                            ofType {
                              name
                              fields {
                                name
                                type {
                                  ofType {
                                    name
                                    fields {
                                      name
                                      type {
                                        fields {
                                          name
                                          type {
                                            ofType {
                                              name
                                              fields {
                                                name
                                                type {
                                                  fields {
                                                    name
                                                    type {
                                                      fields {
                                                        name
                                                        type {
                                                          fields {
                                                            name
                                                            type {
                                                              fields {
                                                                name
                                                                type {
                                                                  fields {
                                                                    name
                                                                    type {
                                                                      fields {
                                                                        name
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                            fields {
                                              name
                                              type {
                                                fields {
                                                  name
                                                  type {
                                                    fields {
                                                      name
                                                      type {
                                                        fields {
                                                          name
                                                          type {
                                                            fields {
                                                              name
                                                              type {
                                                                fields {
                                                                  name
                                                                  type {
                                                                    fields {
                                                                      name
                                                                      type {
                                                                        fields {
                                                                          name
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                  fields {
                                    name
                                    type {
                                      fields {
                                        name
                                        type {
                                          fields {
                                            name
                                            type {
                                              fields {
                                                name
                                                type {
                                                  fields {
                                                    name
                                                    type {
                                                      fields {
                                                        name
                                                        type {
                                                          fields {
                                                            name
                                                            type {
                                                              fields {
                                                                name
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            fields {
                              name
                              type {
                                fields {
                                  name
                                  type {
                                    fields {
                                      name
                                      type {
                                        fields {
                                          name
                                          type {
                                            fields {
                                              name
                                              type {
                                                fields {
                                                  name
                                                  type {
                                                    fields {
                                                      name
                                                      type {
                                                        fields {
                                                          name
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }

      const fileName = `./src/components/0_fragments/api/${q.name}.jsx`;
      const props = result.data.__type.fields;
      const file = fs.createWriteStream(fileName);

      const query = recursiveQuery(props)
        .toString()
        .replace(/\,/g, "");

      // Write REACT files for each fragment
      return (
        fragments.push(partialFragments),
        file.write(`
import { graphql } from "gatsby"
export const query = graphql\`
  fragment ${q.name} on ${q.path} {
      ${query}
    }
  \`
`)
      );
    });
  });

  return Promise.all([changelogs, specsPages, fragments]);
};
