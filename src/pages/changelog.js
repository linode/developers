import React from "react";
// import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/4_layouts/layout";
import SEO from "../components/0_utilities/seo";
import ChangelogNav from "../components/2_molecules/changelog-nav";
import ChangelogItem from "../components/2_molecules/changelog-item";

const ChangelogPage = ({ data }) => {
  const { edges, totalCount } = data.allMarkdownRemark;

  return (
    <Layout title="Changelog" subtitle="Latest updates from the Linode team">
      <SEO title="Changelog" description="" />
      <div className="container mx-auto max-w-lg my-8">
        <ChangelogNav totalCount={totalCount} />
        {edges.map(({ node }) => {
          const { title, date, version } = node.frontmatter;
          const { id, html } = node;
          return (
            <ChangelogItem
              key={id}
              title={title}
              date={date}
              version={version}
              html={html}
            />
          );
        })}
      </div>
    </Layout>
  );
};

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

export default ChangelogPage;

export const query = graphql`
  query ChangelogQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/changelog/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      totalCount
      edges {
        node {
          id
          html
          frontmatter {
            title
            date(fromNow: true)
            version
          }
        }
      }
    }
  }
`;
