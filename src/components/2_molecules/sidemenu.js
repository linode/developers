import React from "react";
import { graphql, StaticQuery } from "gatsby";

const SideMenu = ({ data }) => {
  const nodes = data.allPaths.edges;
  return (
    <ul>
      {nodes.map((node, i) => {
        const n = node.node;
        return (
          <li key={i} className="list-reset">
            <a href={`/api/v4${n.name}`}>
              {(n.get && n.get.summary) ||
                (n.post && n.post.summary) ||
                (n.put && n.put.summary)}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allPaths {
          edges {
            node {
              internal {
                contentDigest
              }
              name
              get {
                summary
              }
              post {
                summary
              }
              put {
                summary
              }
            }
          }
        }
      }
    `}
    render={data => <SideMenu data={data} {...props} />}
  />
);
