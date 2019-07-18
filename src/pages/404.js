import React from "react";

import SEO from "../components/0_utilities/seo";
import Layout from "../components/4_layouts/layout";

const NotFoundPage = () => (
  <Layout noFooter>
    <SEO title="404: Not found" />
    <div className="text-center">
      <div className="mt-10 pt-10">
        <h1>PAGE NOT FOUND</h1>
      </div>
      <div className="mb-10 pb-10">
        <p>You just hit a route that doesn&#39;t exist...</p>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
