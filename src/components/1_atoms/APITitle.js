import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

const APITitle = ({ data }) => {
  const n = data.allDataJson.edges[0].node;

  return (
    <div className="mb-4">
      {/* <div className="mb-4">
        <Link to="/">developers.linode.com</Link>
      </div> */}
      <div className="text-2xl">Linode API {n.info.version}</div>
    </div>
  );
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
