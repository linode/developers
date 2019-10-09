import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Col from "./col";

const _ = require("lodash");

const CommunityPrimary = ({ data }) => {
  return (
    <Col name="community-primary" header="Community">
      {data.allCommunityPrimary.edges.map((link, i) => {
        const node = link.node;
        return (
          <li className="sub-menu__li sub-menu__header-li" key={i}>
            <a
              key={node.id}
              href={node.url ? node.url : null}
              className={`
                  header__link
                  sub-menu__link
                  sub-menu__header-link
                  ${_.kebabCase(node.title)}
                `}
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
      query CommunityPrimary {
        allCommunityPrimary {
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
    render={data => <CommunityPrimary data={data} {...props} />}
  />
);
