import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/4_layouts/layout";
import SEO from "../components/0_utilities/seo";
import CodeBox from "../components/2_molecules/code-box";

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout title="Developer Tools" subtitle="For Developers, by Developers">
      <SEO title="Home" description="" />
      <div className="row-full relative -mt-2 px-2">
        <section className="header max-w-3xl mx-auto px-4 md:px-8 py-12 relative z-10">
          <h2 className="text-center font-normal text-BaseGreenDark">
            Manage your Account with the Linode CLI
          </h2>
          <div className="text-2xl my-3 text-center font-light">
            All of the functionality of the Manager from the command line.
          </div>
          <CodeBox
            line1="pip install linode-cli"
            line2="linode-cli linodes create"
          />
          {/* {{ partial "2_molecules/code-box.html" ( dict "Line1" "pip install linode-cli" "Line2" "linode-cli linodes create") }} */}
          <div className="mt-6 text-center">
            <a
              href="https://www.linode.com/cli"
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-3"
            >
              Get Started with the Linode CLI
            </a>
          </div>
        </section>
      </div>

      <div className="flex flex-wrap my-8 -mx-4 pb-8">
        <article className="w-full md:w-1/2 px-4 mb-4 md:mb-8">
          <div className="px-8 py-20 h-full bg-ThemeCell tile flex flex-col justify-center items-center">
            <h2 className="mt-0 font-normal text-center">
              <a href="/api/v4" className="text-black tile-link">
                API Documentation
              </a>
            </h2>
            <p className="text-xl mt-2 text-center font-light">
              Reference Documentation for the Linode API
            </p>
          </div>
        </article>
        <article className="w-full md:w-1/2 px-4 mb-4 md:mb-8">
          <div className="p-8 py-20 h-full bg-ThemeCell tile flex flex-col justify-center items-center">
            <h2 className="mt-0 font-normal text-center">
              <a href="/guides/" className="text-black tile-link">
                Guides
              </a>
            </h2>
            <p className="text-xl mt-2 text-center font-light">
              How-to’s and Examples Using the Linode API
            </p>
          </div>
        </article>
        <article className="w-full md:w-1/2 px-4 mb-4 md:mb-8">
          <div className="p-8 py-20 h-full bg-ThemeCell tile flex flex-col justify-center items-center">
            <h2 className="mt-0 font-normal text-center">
              <a href="/libraries-tools/" className="text-black tile-link">
                Libraries &amp; Tools
              </a>
            </h2>
            <p className="text-xl mt-2 text-center font-light">
              Jumpstart Your API Integration
            </p>
          </div>
        </article>
        <article className="w-full md:w-1/2 px-4 mb-4 md:mb-8">
          <div className="p-8 py-20 h-full bg-ThemeCell tile flex flex-col justify-center items-center">
            <h2 className="mt-0 font-normal text-center">
              <a
                href="https://www.linode.com/community/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black tile-link"
              >
                Community Questions
              </a>
            </h2>
            <p className="text-xl mt-2 text-center font-light">
              Questions and Answers from the Linode Community
            </p>
          </div>
        </article>
      </div>
      <div className="mx-auto text-center max-w-lg my-8">
        <h2 className="text-BaseGreenDark font-normal">Events</h2>
        <div className="text-2xl my-3 font-light">
          Catch us on the road at conferences, meetups, and job fairs.
        </div>
      </div>
      <div className="my-8 -mx-4 pb-8 text-center">
        <div className="flex flex-row flex-wrap justify-center">
          {edges
            .filter(function(i) {
              const { frontmatter } = i.node;
              const today = Math.round(new Date().getTime() / 1000);
              const startDate =
                new Date(frontmatter.start_date).getTime() / 1000;
              if (startDate >= today) {
                return true;
              }
              return false;
            })
            .slice(0, 3)
            .map(edge => {
              const { frontmatter } = edge.node;
              return (
                <article
                  className="w-full md:w-1/3 px-4 mb-4 md:mb-8"
                  key={edge.node.id}
                  itemscope=""
                  itemtype="http://schema.org/ExhibitionEvent"
                >
                  <meta
                    itemprop="attendee"
                    itemscope
                    itemtype="http://schema.org/Organization"
                    content="Linode"
                  />
                  <div className="p-8 h-full bg-ThemeCell tile">
                    <header>
                      <h3 className="mt-0 mb-4 font-normal">
                        <a
                          href={frontmatter.event_url}
                          className="text-black tile-link"
                          target="_blank"
                          rel="noopener noreferrer"
                          itemprop="url"
                        >
                          <span itemprop="name">{frontmatter.title}</span>
                        </a>
                      </h3>
                    </header>
                    <section>
                      <div
                        itemprop="location"
                        itemscope
                        itemtype="http://schema.org/Place"
                      >
                        <span itemprop="address">{frontmatter.location}</span>
                      </div>
                      <div>
                        <time
                          itemprop="startDate"
                          datetime={frontmatter.start_date}
                        >
                          {frontmatter.start_date}
                        </time>
                      </div>
                      {edge.node.html && (
                        <p
                          itemprop="description"
                          dangerouslySetInnerHTML={{ __html: edge.node.html }}
                        />
                      )}
                    </section>
                  </div>
                </article>
              );
            })}
        </div>
        <a
          className="btn mx-auto text-center mb-12"
          href="https://www.linode.com/events"
          target="_blank"
          rel="noopener noreferrer"
        >
          View All Events
        </a>
      </div>
      <div className="relative row-full pb-8 home-cubes">
        <div className="mx-auto text-center max-w-lg my-8">
          <h2 className="font-normal text-BaseGreenDark">Careers at Linode</h2>
          <div className="text-2xl mt-2 mb-8 font-light">
            Help us create the platform of tomorrow.
          </div>
          <a
            className="btn mx-auto mt-6"
            href="https://www.linode.com/careers"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Opportunities
          </a>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query EventQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/events/" } }
      sort: { order: ASC, fields: [frontmatter___start_date] }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            start_date(formatString: "MMM DD, YYYY")
            event_url
            location
          }
        }
      }
    }
  }
`;

export default IndexPage;
