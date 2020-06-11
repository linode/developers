import React from "react";
import { StaticQuery, graphql } from "gatsby";

const PrimaryMobileNav = ({ data }) => {
  return (
    <nav className="o-menu o-menu--featured">
      <div className="menu-submenu-mobile-primary-container">
        <ul id="menu-submenu-mobile-primary" className="o-menu__list">
        {data.allPrimaryMobile.edges.map(link => {
          const node = link.node;
          return (
          <li className="o-menu__item" key={node.id}>
            <a
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
          })}
        </ul>
      </div>
    </nav>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query primaryMobile {
        allPrimaryMobile {
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
    render={data => <PrimaryMobileNav data={data} {...props} />}
  />
);
