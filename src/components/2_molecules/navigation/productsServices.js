import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Col from "./col";

const _ = require("lodash");

const ProductsServices = ({ data }) => {
  return (
    <Col name="products-services" header="Services">
      {data.allProductsServices.edges.map((link, i) => {
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
      query productsServices {
        allProductsServices {
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
    render={data => <ProductsServices data={data} {...props} />}
  />
);
