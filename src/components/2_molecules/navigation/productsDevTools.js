import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Col from "./col";

const _ = require("lodash");

const ProductsDevTools = ({ data }) => {
  return (
    <Col name="products-developer-tools" header="Developer Tools">
      {data.allProductsDevTools.edges.map((link, i) => {
        const node = link.node;
        return (
          <li className={`o-menu__item o-menu__item--${_.kebabCase(node.title)}`} key={i}>
            <a
              key={node.id}
              href={node.url ? node.url : null}
              className="o-menu__title"
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
      query productsDevTools {
        allProductsDevTools {
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
    render={data => <ProductsDevTools data={data} {...props} />}
  />
);
