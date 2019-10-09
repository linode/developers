import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Col from "./col";

const _ = require("lodash");

const ProductsDevTools = ({ data }) => {
  return (
    <Col name="products-dev-tools" header="Developer Tools">
      {data.allProductsDevTools.edges.map((link, i) => {
        const node = link.node;
        return (
          <li className="sub-menu__li" key={i}>
            <a
              key={node.id}
              href={node.url ? node.url : null}
              className={`
                  header__link
                  sub-menu__link
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
