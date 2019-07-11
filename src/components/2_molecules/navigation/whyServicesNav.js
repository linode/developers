import React from "react";
import { StaticQuery, graphql } from "gatsby";

const _ = require("lodash");

const WhyServicesNav = ({ data }) => {
  return (
    <div className="why-services-nav__wrapper">
      <ul
        id="why-services"
        role="menu"
        className="sub-menu__item sub-menu__item--reg why-services-nav"
        aria-expanded="false"
      >
        <h6 className="sub-menu__header">&nbsp;</h6>
        {data.allWhyServices.edges.map(link => {
          const node = link.node;
          return (
            <li className="sub-menu__li">
              <a
                key={node.id}
                href={node.url ? node.url : null}
                className={`header__link sub-menu__link why-services-nav__link ${
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
    </div>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query whyServices {
        allWhyServices {
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
    render={data => <WhyServicesNav data={data} {...props} />}
  />
);
