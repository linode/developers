import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/4_layouts/layout";
import SEO from "../components/0_utilities/seo";

import Cloud from "../images/svgs/cloud.svg";
import Divider from "../images/svgs/divider.svg";

const GuidesPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout
      title="Linode API Guides"
      subtitle="Guides on getting started with the Linode API"
    >
      <SEO title="Changelog" description="" />
      <div className="mx-auto text-center max-w-lg my-8 pb-4">
        <h2 className="font-normal text-BaseGreenDark">API Guides</h2>
      </div>
      <div className="max-w-xl mx-auto pb-4">
        <div className="flex flex-wrap mt-8 -mx-4">
          {edges.map(edge => {
            const { frontmatter } = edge.node;
            return (
              <article
                key={edge.node.id}
                className="w-full md:w-1/2 px-4 mb-4 md:mb-8"
              >
                <div className="p-8 h-full bg-ThemeCell tile">
                  <header>
                    <h3 className="mt-0 text-2xl font-normal">
                      <a
                        href={frontmatter.external_url}
                        className="text-black tile-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {frontmatter.title}
                      </a>
                    </h3>
                    {/* {{ partial "2_molecules/post-categories" . }} */}
                  </header>
                  <section
                    dangerouslySetInnerHTML={{ __html: edge.node.html }}
                  />
                </div>
              </article>
            );
          })}
        </div>
        <div className="text-center mt-4 md:mt-0 md:mb-12">
          <a
            href="https://linode.com/docs/platform"
            target="_blank"
            className="btn mx-auto"
            rel="noopener noreferrer"
          >
            View All Platform Guides
          </a>
        </div>
      </div>
      <div className="flex flex-wrap my-8 -mx-4">
        <article className="w-full md:w-1/2 px-4 mb-4 md:mb-8">
          <div className="md:p-8 h-full">
            <div className="cloud flex justify-center md:justify-end items-center">
              <Cloud />
            </div>
          </div>
        </article>
        <article className="w-full md:w-1/2 px-4 mb-4 md:mb-8">
          <div className="p-8 h-full flex flex-col justify-center">
            <header>
              <h2 className="mt-0 font-normal text-BaseGreenDark">
                Want more help?
              </h2>
            </header>
            <p className="text-xl mt-2 font-light">
              Find answers, ask questions, and help others.
            </p>
            <div className="flex">
              <a
                href="https://linode.com/community/questions"
                target="_blank"
                className="btn mt-4"
                rel="noopener noreferrer"
              >
                Join our Community
              </a>
            </div>
          </div>
        </article>
      </div>

      <div className="my-8 -mx-4 pb-4">
        <div className="text-center my-4">
          <Divider />
        </div>
        <h2 className="text-center mx-auto font-normal text-BaseGreenDark">
          Get started in the Linode cloud today.
        </h2>
        <div className="flex justify-center">
          <a
            href="https://login.linode.com/signup"
            target="_blank"
            className="btn mt-4 mr-2"
            rel="noopener noreferrer"
          >
            Create an Account
          </a>
          <a
            href="https://www.linode.com/linodes"
            target="_blank"
            className="btn mt-4 ml-2"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query GuidesQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/guides/" } }
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
`;

export default GuidesPage;
