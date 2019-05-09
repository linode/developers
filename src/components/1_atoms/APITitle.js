import React from "react";
import { StaticQuery, graphql } from "gatsby";

const APITitle = ({ data }) => {
  const n = data.allDataJson.edges[0].node;

  return <div className="text-2xl mb-4">Linode API {n.info.version}</div>;
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allDataJson {
          edges {
            node {
              info {
                version
              }
            }
          }
        }
      }
    `}
    render={data => <APITitle data={data} {...props} />}
  />
);
