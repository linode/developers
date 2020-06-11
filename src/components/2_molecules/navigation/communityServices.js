import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Col from "./col";

const CommunityServices = ({ data }) => {
  return (
    <Col name="community-secondary" header="Engage With Us">
      {data.allCommunityServices.edges.map((link, i) => {
        const node = link.node;
        return (
          <li className="o-menu__item" key={i}>
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
      })}
    </Col>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query communityServices {
        allCommunityServices {
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
    render={data => <CommunityServices data={data} {...props} />}
  />
);
