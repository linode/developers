import React from "react";
import { Link } from "gatsby";
import UtilityNav from "../2_molecules/navigation/utilityNav";
import PrimaryNav from "../2_molecules/navigation/primaryNav";
import PrimaryMobile from "../2_molecules/navigation/primaryMobile";
import UtilityMobile from "../2_molecules/navigation/utilityMobile";

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
            <Link to="/" className="logo__link">
              <Logo />
            </Link>
          </div>
          <div>
            <PrimaryNav />
          </div>
        </div>
      </div>
      <div className="mobile-menus__wrapper" id="mobile-menus">
        <form
          role="search"
          method="get"
          className="search-form"
          action="https://linode.flywheelsites.com/"
        >
          <label>
            <span className="search-form__placeholder visually-hidden">
              Search for:
            </span>
            <input
              type="search"
              className="search-form__search-field"
              placeholder="Search …"
            />
          </label>
          <input
            type="submit"
            className="search-submit visually-hidden"
            value="Search"
          />
        </form>
        <PrimaryMobile />
        <UtilityMobile />
      </div>
    </header>
  </div>
);

export default Header;
