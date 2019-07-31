import React from "react";
// import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import Markdown from "react-markdown/with-html";

import Layout from "../../components/4_layouts/layout";
import SEO from "../../components/0_utilities/seo";
import SearchHeader from "../../components/2_molecules/search-header";
import Sidebar from "../../components/2_molecules/sidemenu";

import Caret from "../../images/svgs/caret.svg";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
};

const HeadingRenderer = props => {
  if (props.level === 1) {
    return <h2>{props.children}</h2>;
  }

  const Heading = Markdown.renderers.heading;
  return <Heading {...props} />;
};

class APIDocs extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const top = window.scrollY;
      const scrollButton = document.getElementById("back-to-top");
      if (top >= 50) {
        scrollButton.classList.add("is-visible");
      } else {
        scrollButton.classList.remove("is-visible");
      }
    });
  }

  render() {
    const n = this.props.data.allDataJson.edges[0].node;

    return (
      <Layout
        // title="API Documentation"
        // subtitle="Linode API Documentation"
        fullWidth
      >
        <SEO title="API Documentation" description="" />
        <div className="flex flex-wrap">
          <div className="md:hidden search-header-wrapper">
            <SearchHeader />
          </div>
          <div className="sidebar-container">
            <Sidebar />
          </div>
          <div className="w-full px-4 api-content-wrapper">
            <div className="api-content mx-auto">
              <Markdown
                source={n.info.description}
                escapeHtml={false}
                renderers={{ heading: HeadingRenderer }}
                className="md:mt-8 api-body"
              />
            </div>
          </div>
        </div>
        <button
          className="back-to-top md:hidden"
          onClick={scrollToTop}
          id="back-to-top"
        >
          <span className="back-to-top__caret">
            <Caret />
          </span>
        </button>
      </Layout>
    );
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
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
    `}
    render={data => <APIDocs data={data} {...props} />}
  />
);
