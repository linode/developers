import React from "react";
// import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import Markdown from "react-markdown/with-html";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

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

class CodeBlock extends React.PureComponent {
  render() {
    const { value } = this.props;

    return (
      <SyntaxHighlighter
        language="bash"
        style={atomDark}
        codeTagProps={{
          style: { whiteSpace: "pre-wrap" }
        }}
      >
        {value}
      </SyntaxHighlighter>
    );
  }
}

class APIDocs extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const top = window.scrollY;
      const scrollButton = document.getElementById("back-to-top");
      if (scrollButton && top >= 50) {
        scrollButton.classList.add("is-visible");
      } else if (scrollButton) {
        scrollButton.classList.remove("is-visible");
      } else;
    });
  }

  render() {
    const n = this.props.data.allV4Json.edges[0].node;

    return (
      <Layout title="Linode API Documentation" subtitle="" fullWidth>
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
                renderers={{ heading: HeadingRenderer, code: CodeBlock }}
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
        allV4Json {
          edges {
            node {
              info {
                description
                version
              }
            }
          }
        }
      }
    `}
    render={data => <APIDocs data={data} {...props} />}
  />
);
