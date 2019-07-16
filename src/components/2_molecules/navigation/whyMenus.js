import React from "react";

import WhyPrimary from "./whyPrimary";
import WhyServices from "./whyServices";

const ProductMenus = () => (
  <>
    <div className="sub-menu__col">
      <div className="sub-menu__content">
        <WhyPrimary />
      </div>
    </div>
    <div className="sub-menu__col">
      <div className="sub-menu__content">
        <WhyServices />
      </div>
    </div>
  </>
);

export default ProductMenus;
