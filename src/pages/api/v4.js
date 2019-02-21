import React from "react";
// import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../../components/4_layouts/layout";
import SEO from "../../components/0_utlilities/seo";

const APIDocs = ({ data }) => {

  return (
    <Layout title="API Documentation" subtitle="Linode API Documentation">
      <SEO title="API Documentation" description="" />
      {data.title}
    </Layout>
  );
};

export const query = graphql`
  query {
    dataYaml {
      info {
        title
      }
    }
  }
`

export default APIDocs;