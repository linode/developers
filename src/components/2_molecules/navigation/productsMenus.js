import React from "react";

import ProductFeatured from "./productsFeatured";
import ProductsCompute from "./productsCompute";
import ProductsStorage from "./productsStorage";
import ProductsServices from "./productsServices";
import ProductsNetworking from "./productsNetworking";
import ProductsDevTools from "./productsDevTools";

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
  </>
);

export default ProductMenus;
