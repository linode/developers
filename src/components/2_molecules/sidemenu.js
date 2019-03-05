import React from "react";
import { graphql, StaticQuery } from "gatsby";

const SideMenu = ({ data }) => (
  <React.Fragment>
    {data.allOpenApiSpecPath.edges.map(edge => {
      const { name } = edge.node;
      return (
        <ul>
          <li>{name}</li>
        </ul>
      );
    })}
  </React.Fragment>
);

export default props => (
  <StaticQuery
    query={graphql`
      query ApiPathsQuery {
        allOpenApiSpecPath {
          edges {
            node {
              name
            }
          }
        }
      }
    `}
    render={data => <SideMenu data={data} {...props} />}
  />
);
