import React from "react";
import { graphql, StaticQuery } from "gatsby";

const SideMenu = ({ data }) => {
  const nodes = data.allPaths.edges;
  return (
    <ul>
      {nodes.map((node, i) => {
        const n = node.node;
        return (
          <div key={i}>
            {n.get && (
              <li className="list-reset">
                <a href={`/api/v4${n.name}`}>{n.get.summary}</a>
              </li>
            )}
            {n.post && (
              <li className="list-reset">
                <a href={`/api/v4${n.name}`}>{n.post.summary}</a>
              </li>
            )}
            {n.put && (
              <li className="list-reset">
                <a href={`/api/v4${n.name}`}>{n.put.summary}</a>
              </li>
            )}
          </div>
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
