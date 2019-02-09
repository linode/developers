import React from "react";
import Menu from "../2_molecules/menu";

import Logo from "../../images/svgs/logo.svg";

const Header = ({ siteTitle, menuLinks }) => (
  <>
    <Logo />
    <Menu menuLinks={menuLinks} />
  </>
);

export default Header;
