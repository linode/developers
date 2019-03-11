import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/4_layouts/layout";
import SEO from "../../components/0_utlilities/seo";
import Sidebar from "../../components/2_molecules/sidemenu";

const apiPage = ({ data }) => {
  const n = data.allPaths.edges[0].node;
  const modes = {
    get: "get",
    post: "post",
    put: "put"
  };
  const responses = {
    _200: "_200",
    _204: "_204",
    default: "default"
  };
  return (
    <Layout title="API Documentation" subtitle="Linode API Documentation">
      <SEO title="API Documentation" description="" />
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/4">
          <Sidebar />
        </div>
        <div className="w-full md:w-3/4 pl-8">
          <h1>
            {(n.get && n.get.tags) ||
              (n.post && n.get.post) ||
              (n.put && n.put.tags)}
          </h1>
          {Object.keys(n).map(e => {
            const mode = modes[e];
            const m = n[mode];
            // console.log(m);
            return (
              m && (
                <div key={e} className="mb-8">
                  <h2 id={mode}>{m.summary}</h2>
                  <p>
                    <b>{mode}</b>&nbsp;&nbsp; https://api.linode.com/v4{m.name}
                  </p>
                  <p>{m.description}</p>
                  {Object.keys(m.responses).map((e, i) => {
                    const response = responses[e];
                    const r = m.responses[response];
                    console.log(r);
                    return (
                      r && (
                        <div key={i}>
                          <p>
                            <b>{response.replace(/[_]/g, " ")}</b>:&nbsp;
                            {r.description}
                          </p>
                        </div>
                      )
                    );
                  })}
                </div>
              )
            );
          })}
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
            responses {
              _200 {
                description
              }
              _204 {
                description
              }
              default {
                description
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
            responses {
              _200 {
                description
              }
              default {
                description
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
            responses {
              _200 {
                description
              }
              default {
                description
              }
            }
          }
        }
      }
    }
  }
`;

// export default apiPage;
