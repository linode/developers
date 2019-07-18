import React from "react";
import { StaticQuery, graphql } from "gatsby";

const Tools = ({ data }) => (
  <React.Fragment>
    {data.allMarkdownRemark.edges.map(edge => {
      const { frontmatter } = edge.node;
      return (
        <article
          key={edge.node.id}
          className="item lib-item w-full md:w-1/2 px-4 mb-4 md:mb-8"
        >
          <div className="p-8 h-full bg-ThemeCell tile">
            <header>
              <h3 className="mt-0">
                <a
                  className="text-black tile-link"
                  href={frontmatter.external_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {frontmatter.title}
                </a>
              </h3>
            </header>
            {edge.node.html && (
              <section
                className="mt-2"
                dangerouslySetInnerHTML={{ __html: edge.node.html }}
              />
            )}
          </div>
        </article>
      );
    })}
  </React.Fragment>
);

export default props => (
  <StaticQuery
    query={graphql`
      query ToolsQuery {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/content/tools/" } }
          sort: { order: ASC, fields: [frontmatter___weight] }
        ) {
          edges {
            node {
              id
              html
              frontmatter {
                title
                external_url
              }
            }
          }
        }
      }
    `}
    render={data => <Tools data={data} {...props} />}
  />
);
