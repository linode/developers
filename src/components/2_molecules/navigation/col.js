import React from "react";
const _ = require("lodash");

const Col = props => (
  <div className="o-layout__module">
    <h6>{props.header}</h6>
    <nav className="o-menu">
      <div className={`menu-submenu-${_.kebabCase(props.name)}-container`}>
        <ul
            role="menu"
            id={`menu-submenu-${_.kebabCase(props.name)}`}
            className="o-menu__list"
          >
            {props.children}
        </ul>
      </div>
    </nav>
  </div>
);

export default Col;
