import React from "react";
import { Link } from "gatsby";
import Menu from "../2_molecules/menu";

import Logo from "../../images/svgs/logo.svg";

const Header = ({ siteTitle, menuLinks }) => (
  <div className="header-wrapper bg-light-black">
    <header className="header max-w-3xl mx-auto py-2 px-4 md:px-8 flex flex-wrap items-center justify-between">
      <div className="logo">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>
      </div>
      <Menu menuLinks={menuLinks} />
    </header>
  </div>
);

export default Header;
