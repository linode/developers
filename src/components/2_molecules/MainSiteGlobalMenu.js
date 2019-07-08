import React from "react";
import { StaticQuery, graphql } from "gatsby";

const MainSiteGlobalMenu = ({ data }) => {
  return (
    <div className="max-w-3xl mx-auto flex justify-end">
      <nav
        id="main-menu"
        role="menu"
        className="px-4 md:px-8"
        aria-expanded="false"
      >
        {data.allHeaderUtility.edges.map(link => {
          const node = link.node;
          return (
            <a
              key={node.id}
              href={node.url ? node.url : null}
              className="nav-link-utility text-BaseText hover:text-black relative text-sm mx-2"
              role="menuitem"
            >
              {node.title}
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query mainSiteGlobalMenu {
        allHeaderUtility {
          edges {
            node {
              id
              title
              url
            }
          }
        }
      }
    `}
    render={data => <MainSiteGlobalMenu data={data} {...props} />}
  />
);
