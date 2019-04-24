import React from "react";
// import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Markdown from "react-markdown/with-html";

import Layout from "../../components/4_layouts/layout";
import SEO from "../../components/0_utilities/seo";
import Sidebar from "../../components/2_molecules/sidemenu";

const HeadingRenderer = props => {
  if (props.level === 1) {
    return <h2>{props.children}</h2>;
  }

  const Heading = Markdown.renderers.heading;
  return <Heading {...props} />;
};

const APIDocs = ({ data }) => {
  const n = data.allDataJson.edges[0].node;

  return (
    <Layout
      // title="API Documentation"
      // subtitle="Linode API Documentation"
      fullWidth
    >
      <SEO title="API Documentation" description="" />
      <div className="flex flex-wrap">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="api-content-wrapper">
          <div className="api-content mx-auto">
            <Markdown
              source={n.info.description}
              escapeHtml={false}
              renderers={{ heading: HeadingRenderer }}
              className="mt-8 api-body"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query apiV4 {
    allDataJson {
      edges {
        node {
          info {
            description
          }
        }
      }
    }
  }
`;

export default APIDocs;
