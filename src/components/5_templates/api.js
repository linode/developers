import React from "react";

import Layout from "../../components/4_layouts/layout";
import SEO from "../../components/0_utlilities/seo";
import Sidebar from "../../components/2_molecules/sidemenu";

const specs = require("../../data/spec.json");

const apiPage = ({ pageContext }) => {
  const node = specs.paths[pageContext.name];
  const modes = {
    get: "get",
    put: "put",
    post: "post"
  };
  return (
    <Layout title="API Documentation" subtitle="Linode API Documentation">
      <SEO title="API Documentation" description="" />
      {Object.keys(node).map(e => {
        const mode = modes[e];
        const n = node[mode];
        return (
          mode !== undefined && (
            <div key={e}>
              <h1>{n.tags}</h1>
              <h2>{mode}</h2>
              <p>{n.summary}</p>
            </div>
          )
        );
      })}
      {/* {node.get && node.get.tags && <div>{node.get.tags}</div>}
      {node.get && node.get.summary && <div>{node.get.summary}</div>}
      {node.put && node.put.summary && <div>{node.put.summary}</div>}
      {node.post && node.post.summary && <div>{node.post.summary}</div>} */}
      <Sidebar />
    </Layout>
  );
};

export default apiPage;
