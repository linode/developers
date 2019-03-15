import React from "react";
// import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../../components/4_layouts/layout";
import SEO from "../../components/0_utlilities/seo";
import ChangelogNav from "../../components/2_molecules/changelog-nav";
import ChangelogItem from "../../components/2_molecules/changelog-item";

const Changelogs = ({ pageContext, data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout title="Changelog" subtitle="Latest updates from the Linode team">
      <SEO title="Changelog" description="" />
      <div className="container mx-auto max-w-lg my-8">
        <ChangelogNav />
        {/* <h1>{tagHeader}</h1> */}
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
