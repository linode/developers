import React from "react";
const _ = require("lodash");

const Col = props => (
  <div className="o-layout__module">
    <h6>{props.header}</h6>
    <nav className="o-menu">
      <ul
          role="menu"
          id={`menu-submenu-${_.kebabCase(props.name)}`}
          className="o-menu__list"
        >
          {props.children}
      </ul>
    </nav>
  </div>
);

export default Col;
