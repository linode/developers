import React from "react";

import ProductFeatured from "./productsFeatured";
import ProductsCompute from "./productsCompute";
import ProductsStorage from "./productsStorage";
import ProductsServices from "./productsServices";
import ProductsNetworking from "./productsNetworking";
import ProductsDevTools from "./productsDevTools";

import Caret from "../../../images/svgs/angle-down-regular.svg";

const ProductMenus = () => (
  <>
    <div className="sub-menu__col">
      <div className="sub-menu__content">
        <ProductFeatured />
      </div>
    </div>
    <div className="sub-menu__col">
      <div className="sub-menu__content">
        <ProductsCompute />
        <ProductsStorage />
        <ProductsServices />
      </div>
    </div>
    <div className="sub-menu__col">
      <div className="sub-menu__content">
        <ProductsNetworking />
        <ProductsDevTools />
      </div>
    </div>
    <div className="all-products-link">
      <a
        href="https://linode.com/products/"
        className="header__link primary-nav__link"
      >
        View All Products
        <span className="all-products-link__caret">
          <Caret />
        </span>
      </a>
    </div>
  </>
);

export default ProductMenus;
