import React from "react";
import { StaticQuery, graphql } from "gatsby";

const _ = require("lodash");

const ProductsFeaturedNav = ({ data }) => {
  return (
    <>
      <ul
        id="products"
        role="menu"
        className="sub-menu__item why-primary-nav"
        aria-expanded="false"
      >
        <h6 className="sub-menu__header">Featured</h6>
        {data.allProductsFeatured.edges.map((link, i) => {
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
                  sub-menu__header-link--w-icon
                  why-primary-nav__link
                  ${_.kebabCase(node.title)}
                `}
                role="menuitem"
              >
                <img
                  src={node.icon}
                  className="sub-menu__icon"
                  alt={node.title}
                />
                <span className="sub-menu__body">
                  <span className="sub-menu__title">{node.title}</span>
                  <span className="sub-menu__description">
                    {node.description}
                  </span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query productsFeatured {
        allProductsFeatured {
          edges {
            node {
              id
              title
              url
              description
              icon
            }
          }
        }
      }
    `}
    render={data => <ProductsFeaturedNav data={data} {...props} />}
  />
);
