import React from "react";
// import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/4_layouts/layout";
import SEO from "../components/0_utlilities/seo";
import ChangelogNav from "../components/2_molecules/changelog-nav";

const Changelog = () => (
  <Layout title="Changelog" subtitle="Latest updates from the Linode team">
    <SEO title="Changelog" description="" />
    <ChangelogNav />
  </Layout>
);

// TagsPage.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       group: PropTypes.arrayOf(
//         PropTypes.shape({
//           fieldValue: PropTypes.string.isRequired,
//           totalCount: PropTypes.number.isRequired
//         }).isRequired
//       )
//     }),
//     site: PropTypes.shape({
//       siteMetadata: PropTypes.shape({
//         title: PropTypes.string.isRequired
//       })
//     })
//   })
// };

export default Changelog;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___changelog) {
        fieldValue
        totalCount
      }
    }
  }
`;
