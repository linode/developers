import React from "react";
import { StaticQuery, graphql } from "gatsby";

const MainSiteGlobalMenu = ({ data }) => {
  return (
    <div className="o-layout__module c-utility-nav">
      <div className="o-menu o-menu--flex">
        <ul
          id="menu-header-utility"
          role="menu"
          className="o-menu__list"
          aria-expanded="false"
        >
          <li className="o-menu__item o-menu__item--search">
            <a
              className="o-menu__link"
              href="https://www.linode.com/search/"
            >
              <span
                className="o-menu__title"
              >
                Search
              </span>
            </a>
          </li>
          {data.allHeaderUtility.edges.map(link => {
            const node = link.node;
            if ( node.title !== 'Search' ) {
              return (
                <li className="o-menu__item" key={node.id}>
                  <a
                    key={node.id}
                    href={node.url ? node.url : null}
                    className="o-menu__link"
                    role="menuitem"
                  >
                    <span className="o-menu__title">
                      {node.title}
                    </span>
                  </a>
                </li>
              );
            }
          })}
        </ul>
      </div>
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
