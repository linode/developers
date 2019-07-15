import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Col from "./col";

const _ = require("lodash");

const WhyPrimary = ({ data }) => {
  return (
    <Col name="why-primary" header="Why Linode">
      {data.allWhyPrimary.edges.map((link, i) => {
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
                  why-primary-nav__link
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
    render={data => <WhyPrimary data={data} {...props} />}
  />
);
