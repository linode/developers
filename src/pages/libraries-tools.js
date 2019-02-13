import React from "react";

import Layout from "../components/4_layouts/layout";
import SEO from "../components/0_utlilities/seo";
import Libraries from "../components/2_molecules/libraries";
import Tools from "../components/2_molecules/tools";
import CodeBox from "../components/2_molecules/code-box";

const LibToolsPage = () => {
  return (
    <Layout
      title="Linode API Libraries and Tools"
      subtitle="Libraries and DevOps tools for the Linode API"
    >
      <SEO title="Home" description="" />
      <div className="flex flex-wrap mb-8 -mx-4">
        <div className="w-full px-4">
          <div className="my-4 md:mt-12 md:mt-8 max-w-3xl">
            <h2 className="font-normal text-BaseGreenDark mb-6 md:mb-0 text-center">
              Tools
            </h2>
            <div className="flex mx-auto md:-mx-4 items-center md:justify-center flex-col-reverse md:flex-row mb-2 max-w-xs md:max-w-full">
              <div className="px-4 flex flex-wrap">
                <div style={{ width: 300 }}>
                  <CodeBox
                    line1="pip install linode-cli"
                    line2="linode-cli linodes create"
                  />
                  {/* {{ partial "2_molecules/code-box.html" ( dict "Line1" "pip install linode-cli" "Line2" "linode-cli linodes create") }} */}
                </div>
                <div className="mt-4 md:hidden flex w-full justify-center">
                  <a
                    href="https://www.linode.com/cli"
                    target="_blank"
                    className="btn text-sm"
                    rel="noopener noreferrer"
                  >
                    Linode CLI on GitHub
                  </a>
                </div>
              </div>
              <div className="px-4">
                <h3 className="md:text-2xl mt-0 font-normal text-BaseGreenDark text-center md:text-left">
                  Linode CLI
                </h3>
                <div className="md:text-lg my-3 text-light text-center md:text-left">
                  An easy way to get up and running with the Linode API.
                </div>
                <div className="pt-3 hidden md:block">
                  <a
                    href="https://www.linode.com/cli"
                    target="_blank"
                    className="btn text-sm"
                    rel="noopener noreferrer"
                  >
                    Linode CLI on GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 md:mb-4 -mx-4">
              <Tools />
            </div>
          </div>
          <h2 className="font-normal text-BaseGreenDark text-center">
            Libraries
          </h2>
          <div className="flex flex-wrap mt-6 md:mt-8 md:mb-4 -mx-4 grid">
            <Libraries />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LibToolsPage;
