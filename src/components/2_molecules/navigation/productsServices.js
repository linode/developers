import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Col from "./col";

const ProductsServices = ({ data }) => {
  return (
    <Col name="products-services" header="Services">
      {data.allProductsServices.edges.map((link, i) => {
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
