import React from "react";
import { Link } from "gatsby";
import UtilityNav from "../2_molecules/navigation/utilityNav";
import PrimaryNav from "../2_molecules/navigation/primaryNav";

import Logo from "../../images/svgs/new-logo.svg";

const Header = () => (
  <div className="header__wrapper" id="header">
    <header className="header">
      <div className="utility-nav__wrapper">
        <UtilityNav />
      </div>
      <div className="primary-nav__wrapper">
        <div className="primary-nav__inner">
          <div className="logo">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>
          </div>
          <div>
            <PrimaryNav />
          </div>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
