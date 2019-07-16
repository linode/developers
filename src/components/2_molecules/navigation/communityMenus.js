import React from "react";

import CommunityPrimary from "./communityPrimary";
import CommunityServices from "./communityServices";

const CommunityMenus = () => (
  <>
    <div className="sub-menu__col">
      <div className="sub-menu__content">
        <CommunityPrimary />
      </div>
    </div>
    <div className="sub-menu__col">
      <div className="sub-menu__content">
        <CommunityServices />
      </div>
    </div>
  </>
);

export default CommunityMenus;
