import React from "react";
import { graphql } from "gatsby";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Clipboard from "react-clipboard.js";
import Markdown from "react-markdown/with-html";
import "react-tabs/style/react-tabs.css";

import Layout from "../../components/4_layouts/layout";
import SEO from "../../components/0_utilities/seo";
import Sidebar from "../../components/2_molecules/sidemenu";
import ParamDisplay from "../../components/2_molecules/paramDisplay";
import BodySchema from "../../components/2_molecules/BodySchema";
import Security from "../../components/2_molecules/Security";
import ResponseList from "../../components/2_molecules/ResponseList";
import ResponseSamples from "../2_molecules/ResponseSamples";

import Copy from "../../images/svgs/copy.svg";

const apiPage = ({ data }) => {
  const n = data.allPaths.edges[0].node;
  const modes = {
    get: "get",
    put: "put",
    post: "post",
    delete: "delete"
  };
  const responseOptions = {
    _200: "_200",
    _204: "_204",
    default: "default"
  };
  return (
    <Layout
      // title="API Documentation"
      // subtitle="Linode API Documentation"
      fullWidth
    >
      <SEO title="Linode API Documentation" description="Container Tools" />
      <div className="flex flex-wrap">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="w-full px-4 api-content-wrapper">
          <div className="api-content mx-auto">
            <h1 className="mb-4 ">
              {(n.get && n.get.tags) ||
                (n.post && n.post.tags) ||
                (n.put && n.put.tags) ||
                (n.delete && n.delete.tags)}
            </h1>
            {Object.keys(n).map((e, i) => {
              const mode = modes[e];
              const m = n[mode];

              return (
                m && (
                  <div key={i} className="flex flex-col">
                    <span id={mode} className="endpoint-anchor" />
                    <div className="xs-full mb-8 px-2">
                      <h2 className="mt-0">{m.summary}</h2>
                      <div className="bg-ThemeCell p-4 mt-4 mb-8">
                        <span className="tag big bold mr-2 uppercase">
                          {mode}
                        </span>
                        <pre>https://api.linode.com/v4{n.name}</pre>
                      </div>
                      <Markdown
                        source={m.description}
                        escapeHtml={false}
                        className="my-8 api-desc"
                      />
                      {m.security && <Security oauth={m.security[1].oauth} />}
                      {m.parameters && (
                        <div className="my-8">
                          <h3 className="mb-2">Query Parameters</h3>
                          {m.parameters.map((param, i) => (
                            <ParamDisplay
                              key={`param-item-${i}`}
                              param={param}
                              m={m}
                            />
                          ))}
                        </div>
                      )}
                      {n.parameters && (
                        <div className="my-8">
                          <h3 className="mb-2">Path Parameters</h3>
                          {n.parameters.map((param, i) => (
                            <ParamDisplay
                              key={`param-item-${i}`}
                              param={param}
                              m={n}
                            />
                          ))}
                        </div>
                      )}
                      {m.requestBody && <BodySchema data={m} />}
                      <div className="w-full mb-8">
                        <h3>Request Samples</h3>
                        <Tabs className="my-4">
                          <TabList>
                            {m.x_code_samples &&
                              m.x_code_samples.map((x, i) => {
                                return <Tab key={i}>{x.lang}</Tab>;
                              })}
                          </TabList>
                          {m.x_code_samples &&
                            m.x_code_samples.map((x, i) => {
                              return (
                                <TabPanel key={i}>
                                  <div className="flex justify-end text-sm">
                                    <Clipboard
                                      data-clipboard-text={x.source}
                                      className="flex items-center hover:text-BaseBlueLight"
                                    >
                                      <span className="mr-2">Copy</span>
                                      <Copy style={{ width: 22, height: 22 }} />
                                    </Clipboard>
                                  </div>
                                  <SyntaxHighlighter
                                    language="bash"
                                    style={atomDark}
                                    className="api-samples"
                                    codeTagProps={{
                                      style: { whiteSpace: "pre-wrap" }
                                    }}
                                  >
                                    {x.source}
                                  </SyntaxHighlighter>
                                </TabPanel>
                              );
                            })}
                        </Tabs>
                        <ResponseSamples
                          options={responseOptions}
                          responses={m.responses}
                          m={m}
                          mode={mode}
                        />
                      </div>

                      <ResponseList
                        options={responseOptions}
                        responses={m.responses}
                        m={m}
                        mode={mode}
                      />
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default apiPage;

export const query = graphql`
  query ApiQuery($name: String) {
    allPaths(filter: { name: { in: [$name] } }) {
      edges {
        node {
          internal {
            contentDigest
          }
          name
          parameters {
            name
            in
            description
            required
            schema {
              type
              format
              minimum
              maximum
            }
          }
          get {
            x_linode_grant
            summary
            description
            operationId
            x_linode_cli_action
            x_linode_cli_skip
            x_linode_redoc_load_ids
            x_linode_cli_command
            tags
            security {
              oauth
            }
            parameters {
              name
              in
              description
              required
              schema {
                type
                minimum
                default
                maximum
              }
            }
            x_code_samples {
              lang
              source
            }
            responses {
              _200 {
                description
                content {
                  application_json {
                    schema {
                      properties {
                        ...getProperties
                      }
                    }
                  }
                }
              }
              _204 {
                description
              }
              default {
                description
                content {
                  application_json {
                    schema {
                      type
                      properties {
                        errors {
                          items {
                            properties {
                              reason {
                                type
                                description
                                example
                              }
                              field {
                                type
                                description
                                example
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
          post {
            x_linode_grant
            summary
            description
            operationId
            x_linode_cli_action
            x_linode_cli_command
            x_linode_charge
            x_linode_cli_skip
            security {
              oauth
            }
            x_code_samples {
              lang
              source
            }
            requestBody {
              description
              content {
                application_json {
                  schema {
                    type
                    description
                    required
                    allOf {
                      required
                      properties {
                        ...allOfPostRequestBody
                      }
                    }
                    properties {
                      ...postRequestBody
                    }
                  }
                }
              }
            }
            responses {
              _200 {
                description
                content {
                  application_json {
                    schema {
                      description
                      properties {
                        ...postProperties
                      }
                    }
                  }
                }
              }
              default {
                description
                content {
                  application_json {
                    schema {
                      type
                      properties {
                        errors {
                          type
                          items {
                            description
                            properties {
                              reason {
                                type
                                description
                                example
                              }
                              field {
                                type
                                description
                                example
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
          put {
            x_linode_grant
            summary
            description
            operationId
            x_linode_cli_action
            x_linode_cli_skip
            security {
              oauth
            }
            x_code_samples {
              lang
              source
            }
            requestBody {
              description
              content {
                application_json {
                  schema {
                    type
                    required
                    description
                    allOf {
                      properties {
                        ...allOfputRequestBody
                      }
                    }
                    properties {
                      ...putRequestBody
                    }
                  }
                }
              }
            }
            responses {
              _200 {
                description
                content {
                  application_json {
                    schema {
                      description
                      properties {
                        ...putProperties
                      }
                    }
                  }
                }
              }
              default {
                description
                content {
                  application_json {
                    schema {
                      type
                      properties {
                        errors {
                          items {
                            properties {
                              reason {
                                type
                                description
                                example
                              }
                              field {
                                type
                                description
                                example
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
          delete {
            summary
            description
            operationId
            x_linode_cli_action
            x_linode_grant
            security {
              oauth
            }
            x_code_samples {
              lang
              source
            }
            responses {
              _200 {
                description
                content {
                  application_json {
                    schema {
                      type
                    }
                  }
                }
              }
              default {
                description
                content {
                  application_json {
                    schema {
                      type
                      properties {
                        errors {
                          type
                          items {
                            type
                            description
                            properties {
                              reason {
                                type
                                description
                                example
                              }
                              field {
                                type
                                description
                                example
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
`;
