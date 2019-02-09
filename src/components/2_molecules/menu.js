import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Menu = ({ menuLinks }) => (
  <nav>
    {menuLinks.map(link => (
      <li key={link.name}>
        <Link to={link.link}>{link.name}</Link>
      </li>
    ))}
  </nav>
);

Menu.propTypes = {
  menuLinks: PropTypes.array.isRequired
};

export default Menu;
