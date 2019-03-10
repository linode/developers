import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/4_layouts/layout";
import SEO from "../../components/0_utlilities/seo";
import Sidebar from "../../components/2_molecules/sidemenu";

const apiPage = ({ data }) => {
  // const node = pageContext.name;
  const n = data.allPaths.edges[0].node;
  console.log(n);
  return (
    <Layout title="API Documentation" subtitle="Linode API Documentation">
      <SEO title="API Documentation" description="" />
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/4 mt-8">
          <Sidebar />
        </div>
        <div className="w-full md:w-3/4 pl-8">
          <h1>
            {n.name}
            {/* {(n.get && n.get.tags) ||
              (n.post && n.post.tags) ||
              (n.put && n.put.tags)} */}
          </h1>
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
          }
          put {
            x_linode_grant
            summary
            description
            operationId
            x_linode_cli_action
            x_linode_cli_skip
          }
        }
      }
    }
  }
`;

// export default apiPage;
