import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Menu = ({ menuLinks }) => (
  <nav id="main-menu" role="menu" className="main-nav" aria-expanded="false">
    {menuLinks.map(link => (
      <Link
        key={link.name}
        to={link.link}
        className="main-nav-link text-BaseNavGrey hover:text-white relative"
        role="menuitem"
      >
        {link.name}
      </Link>
    ))}
  </nav>
);

Menu.propTypes = {
  menuLinks: PropTypes.array.isRequired
};

export default Menu;
