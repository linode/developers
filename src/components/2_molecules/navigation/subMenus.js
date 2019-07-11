import React from "react";

const SubMenu = ({ id, columns, subMenuOpen }) => (
  <div
    id={id}
    className={`
    sub-menu
    ${subMenuOpen === false ? `visually-hidden` : ""}
  `}
  >
    <div className="sub-menu__container">
      {columns.map((column, i) => {
        return (
          <div className="sub-menu__col" key={i}>
            <div className="sub-menu__content">{column}</div>
          </div>
        );
      })}
    </div>
  </div>
);

export default SubMenu;
