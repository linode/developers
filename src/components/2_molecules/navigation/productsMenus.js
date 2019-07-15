import React from "react";

import ProductFeatured from "./productsFeatured";
import ProductsCompute from "./productsCompute";
import ProductsStorage from "./productsStorage";
import ProductsServices from "./productsServices";

const ProductMenus = () => (
  <>
    <div class="sub-menu__col">
      <div className="sub-menu__content">
        <ProductFeatured />
      </div>
    </div>
    <div class="sub-menu__col">
      <div className="sub-menu__content">
        <ProductsCompute />
        <ProductsStorage />
        <ProductsServices />
      </div>
    </div>
  </>
);

export default ProductMenus;
