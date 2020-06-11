import React from "react";
import { StaticQuery, graphql } from "gatsby";

const UtilityMobileNav = ({ data }) => {
  return (
    <nav className="o-menu o-menu--2col">
      <div className="menu-submenu-mobile-utility-container">
        <ul id="menu-submenu-mobile-utility" className="o-menu__list">
        {data.allUtilityMobile.edges.map(link => {
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
      query utilityMobile {
        allUtilityMobile {
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
    render={data => <UtilityMobileNav data={data} {...props} />}
  />
);
