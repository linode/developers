import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Col from "./col";

const PrimaryMobileNav = ({ data }) => {
  return (
    <Col name="primary-mobile" header="">
      {data.allPrimaryMobile.edges.map(link => {
        const node = link.node;
        return (
          <li className="sub-menu__li sub-menu__header-li" key={node.id}>
            <a
              href={node.url ? node.url : null}
              className="header__link sub-menu__link sub-menu__header-link primary-mobile__link"
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
