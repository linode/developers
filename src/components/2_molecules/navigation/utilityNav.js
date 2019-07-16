import React from "react";
import { StaticQuery, graphql } from "gatsby";

const MainSiteGlobalMenu = ({ data }) => {
  return (
    <div className="utility-nav__container">
      <nav
        id="main-menu"
        role="menu"
        className="utility-nav"
        aria-expanded="false"
      >
        {data.allHeaderUtility.edges.map(link => {
          const node = link.node;
          return (
            <a
              key={node.id}
              href={node.url ? node.url : null}
              className="header__link utility-nav__link"
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
