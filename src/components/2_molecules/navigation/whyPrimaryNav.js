import React from "react";
import { StaticQuery, graphql } from "gatsby";

const _ = require("lodash");

const WhyPrimaryNav = ({ data }) => {
  return (
    <>
      <ul
        id="why-primary"
        role="menu"
        className="sub-menu__item why-primary-nav"
        aria-expanded="false"
      >
        <h6 className="sub-menu__header">Why Linode</h6>
        {data.allWhyPrimary.edges.map(link => {
          const node = link.node;
          return (
            <li className="sub-menu__li sub-menu__header-li">
              <a
                key={node.id}
                href={node.url ? node.url : null}
                className={`header__link sub-menu__link sub-menu__header-link why-primary-nav__link ${
                  !node.url ? "dropdown" : ""
                } ${_.kebabCase(node.title)}`}
                role="menuitem"
              >
                {node.title}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query whyPrimary {
        allWhyPrimary {
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
    render={data => <WhyPrimaryNav data={data} {...props} />}
  />
);
