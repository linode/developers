import React from "react";

import CommunityFeatured from "./CommunityFeatured";
import CommunityPrimary from "./communityPrimary";
import CommunityServices from "./communityServices";

const CommunityMenus = () => (
  <div className="o-layout__row c-sub-menu c-sub-menu--community" id="sub-menu--community">
    <div className="o-layout__colset">
      <div className="o-layout__col">
        <CommunityFeatured />
      </div>
      <div className="o-layout__col">
        <CommunityPrimary />
      </div>
      <div className="o-layout__col">
        <CommunityServices />
      </div>
    </div>
  </div>
);

export default CommunityMenus;
