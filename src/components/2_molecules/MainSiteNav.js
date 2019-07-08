import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Caret from "../../images/svgs/angle-down-regular.svg";
import SearchIcon from "../../images/svgs/search-solid.svg";

const MainSiteNav = ({ data }) => {
  return (
    <>
      <nav id="main-menu" role="menu" className="" aria-expanded="false">
        {data.allHeaderPrimary.edges.map(link => {
          const node = link.node;
          return (
            <a
              key={node.id}
              href={node.url ? node.url : null}
              className={`header-primary-menu nav-link text-BaseText hover:text-black relative text-lg ${
                !node.url ? "dropdown" : ""
              }`}
              role="menuitem"
            >
              {node.title !== "Search" ? (
                <>
                  {node.title}
                  {!node.url && (
                    <span className="caret">
                      <Caret />
                    </span>
                  )}
                </>
              ) : (
                <span className="search-icon">
                  <span className="visually-hidden">{node.title}</span>
                  <SearchIcon />
                </span>
              )}
            </a>
          );
        })}
      </nav>
    </>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query mainSiteNav {
        allHeaderPrimary {
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
    render={data => <MainSiteNav data={data} {...props} />}
  />
);
