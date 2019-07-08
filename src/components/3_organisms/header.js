import React from "react";
import { Link } from "gatsby";
import MainSiteGlobalMenu from "../2_molecules/MainSiteGlobalMenu";
import MainSiteNav from "../2_molecules/MainSiteNav";

import Logo from "../../images/svgs/logo.svg";

const Header = ({ border }) => (
  <div
    className={`header-wrapper bg-white ${border ? "border-b border-api" : ""}`}
  >
    <header className="header">
      <div className="border-b py-2">
        <MainSiteGlobalMenu />
      </div>
      <div className="primaryLinks-container max-w-3xl mx-auto">
        <div class="primaryLinks-inner flex flex-wrap items-center justify-between">
          <div className="logo">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>
          </div>
          <div>
            <MainSiteNav />
          </div>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
