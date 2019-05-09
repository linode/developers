import React from "react";
import { Link } from "gatsby";
import MainSiteGlobalMenu from "../2_molecules/MainSiteGlobalMenu";
import MainSiteNav from "../2_molecules/MainSiteNav";

import Logo from "../../images/svgs/logo.svg";

const Header = () => (
  <div className="header-wrapper">
    <header className="header max-w-3xl mx-auto py-2 px-4 md:px-8 flex flex-wrap items-center justify-between">
      <div className="w-full flex justify-end">
        <MainSiteGlobalMenu />
      </div>
      <div className="logo">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>
      </div>
      <div className="border-t">
        <MainSiteNav />
      </div>
    </header>
  </div>
);

export default Header;
