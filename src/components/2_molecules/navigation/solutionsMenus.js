import React from "react";

import SolutionsFeatured from "./solutionsFeatured";
import SolutionsAll from "./solutionsAll";

const SolutionsMenus = () => (
  <div className="o-layout__row c-sub-menu c-sub-menu--2col c-sub-menu--solutions" id="sub-menu--solutions">
    <div className="o-layout__colset">
      <div className="o-layout__col">
        <SolutionsFeatured />
        <div className="o-layout__module">
          <a href="https://linode.com/solutions/" className="o-link--arrow">
            View All Solutions
          </a>
        </div>
      </div>
      <div className="o-layout__col">
        <SolutionsAll />
      </div>
    </div>
  </div>
);

export default SolutionsMenus;
