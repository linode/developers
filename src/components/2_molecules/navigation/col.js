import React from "react";

const Col = props => (
  <div className={`${props.name + "nav__wrapper"}`}>
    <ul
      role="menu"
      className={`
            sub-menu__item
            sub-menu__item--reg
            ${props.name}-nav
          `}
      aria-expanded="false"
    >
      <h6 className="sub-menu__header">{props.header}</h6>
      {props.children}
    </ul>
  </div>
);

export default Col;
