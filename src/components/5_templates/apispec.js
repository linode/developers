import React from "react";
// import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../../components/4_layouts/layout";
import SEO from "../../components/0_utlilities/seo";

const Changelogs = () => {
  // const { edges } = data.allMarkdownRemark;

  return (
    <Layout title="Changelog" subtitle="Latest updates from the Linode team">
      <SEO title="Changelog" description="" />
      <div className="container mx-auto max-w-lg my-8">poo</div>
    </Layout>
  );
};

export default Changelogs;
