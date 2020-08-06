import React from "react";

import PricingFeatured from "./pricingFeatured";
import PricingPrimary from "./pricingPrimary";

const PricingMenus = () => (
  <div className="o-layout__row c-sub-menu c-sub-menu--pricing" id="sub-menu--pricing">
    <div className="o-layout__colset">
      <div className="o-layout__col">
        <PricingFeatured />
      </div>
      <div className="o-layout__col">
        <PricingPrimary />
      </div>
    </div>
  </div>
);

export default PricingMenus;
