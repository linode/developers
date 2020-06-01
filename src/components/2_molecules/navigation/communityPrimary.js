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
          <li className={`o-menu__item o-menu__item--${_.kebabCase(node.title)}`} key={i}>
            <a
              key={node.id}
              href={node.url ? node.url : null}
              className="o-menu__link"
              role="menuitem"
            >
              <span className="o-menu__title">
                <span className="title">
                  {node.title}
                </span>
              </span>
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
