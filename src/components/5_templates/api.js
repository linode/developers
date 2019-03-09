import React from "react";

import Layout from "../../components/4_layouts/layout";
import SEO from "../../components/0_utlilities/seo";
import Sidebar from "../../components/2_molecules/sidemenu";

const apiPage = () => {
  return (
    <Layout title="API Documentation" subtitle="Linode API Documentation">
      <SEO title="API Documentation" description="" />
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/4 mt-8">
          <Sidebar />
        </div>
        poos
      </div>
    </Layout>
  );
};

export default apiPage;
