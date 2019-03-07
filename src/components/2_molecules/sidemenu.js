import React from "react";
// import { graphql, StaticQuery } from "gatsby";

const specs = require("../../data/spec.json");

const SideMenu = () => (
  <React.Fragment>
    <ul>
      {Object.keys(specs.paths).map(name => {
        return (
          <li key={name}>
            <a href={`/api/v4${name}`}>{name}</a>
          </li>
        );
      })}
    </ul>
  </React.Fragment>
);

export default SideMenu;
