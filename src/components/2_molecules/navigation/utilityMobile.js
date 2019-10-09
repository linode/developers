import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Col from "./col";

const UtilityMobileNav = ({ data }) => {
  return (
    <Col name="utility-mobile" header="">
      {data.allUtilityMobile.edges.map(link => {
        const node = link.node;
        return (
          <li className="sub-menu__li sub-menu__header-li" key={node.id}>
            <a
              href={node.url ? node.url : null}
              className="header__link sub-menu__link mobile__link--small"
              role="menuitem"
            >
              {node.title}
            </a>
          </li>
        );
      })}
    </Col>
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
