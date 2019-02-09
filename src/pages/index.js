import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/4_layouts/layout";
import SEO from "../components/0_utlilities/seo";

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="Home" description="" />
      {edges.map(edge => {
        const { frontmatter } = edge.node;
        return <div key={edge.node.id}>{frontmatter.title}</div>;
      })}
    </Layout>
  );
};

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/changelog/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

export default IndexPage;
