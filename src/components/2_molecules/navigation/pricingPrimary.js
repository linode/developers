import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Col from "./col";

const PricingPrimary = ({ data }) => {
  return (
    <Col name="pricing-primary" header="Pricing">
      {data.allPricingPrimary.edges.map((link, i) => {
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
      query pricingPrimary {
        allPricingPrimary {
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
    render={data => <PricingPrimary data={data} {...props} />}
  />
);
