import React from "react";
// import { graphql, StaticQuery } from "gatsby";

const specs = require("../../data/spec.json");

console.log(specs.paths);

const SideMenu = () => (
  <React.Fragment>
    {Object.keys(specs.paths).map(name => {
      // const { eu } = name;
      return (
        <ul>
          <li>
            <a href={`/api/v4${name}`}>{name}</a>
          </li>
        </ul>
      );
    })}
  </React.Fragment>
);

export default SideMenu;
