import React from "react";
// import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../../components/4_layouts/layout";
import SEO from "../../components/0_utilities/seo";
import Sidebar from "../../components/2_molecules/sidemenu";

const APIDocs = ({ data }) => {
  // const nodes = data.allPaths.edges;
  return (
    <Layout
      title="API Documentation"
      subtitle="Linode API Documentation"
      fullWidth
    >
      <SEO title="API Documentation" description="" />

      <Sidebar />
    </Layout>
  );
};

export const query = graphql`
  query PathQuery {
    allPaths {
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

export default APIDocs;
