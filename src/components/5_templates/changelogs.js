import React from "react";
// import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../../components/4_layouts/layout";
import SEO from "../../components/0_utlilities/seo";

const Changelogs = ({ pageContext, data }) => {
  const { changelog } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${changelog}"`;

  return (
    <Layout title="Changelog" subtitle="Latest updates from the Linode team">
      <SEO title="Changelog" description="" />
      {/* <h1>{tagHeader}</h1> */}
      <ul>
        {edges.map(({ node }) => {
          const { title } = node.frontmatter;
          return <li key={title}>{title}</li>;
        })}
      </ul>
    </Layout>
  );
};

// Changelogs.propTypes = {
//   pageContext: PropTypes.shape({
//     tag: PropTypes.string.isRequired
//   }),
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       totalCount: PropTypes.number.isRequired,
//       edges: PropTypes.arrayOf(
//         PropTypes.shape({
//           node: PropTypes.shape({
//             frontmatter: PropTypes.shape({
//               path: PropTypes.string.isRequired,
//               title: PropTypes.string.isRequired
//             })
//           })
//         }).isRequired
//       )
//     })
//   })
// };

export default Changelogs;

export const query = graphql`
  query($changelog: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { changelog: { in: [$changelog] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
