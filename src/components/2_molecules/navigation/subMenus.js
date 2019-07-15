import React from "react";

const SubMenu = ({ id, menus, subMenuOpen }) => (
  <div
    id={id}
    className={`
    sub-menu
    ${subMenuOpen === false ? `visually-hidden` : ""}
  `}
  >
    <div className="sub-menu__container">{menus}</div>
  </div>
);

export default SubMenu;
