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
      <div className="flex flex-wrap items-center justify-between py-4 max-w-3xl mx-auto px-4 md:px-8">
        <div className="logo">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>
        </div>
        <div>
          <MainSiteNav />
        </div>
      </div>
    </header>
  </div>
);

export default Header;
