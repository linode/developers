import React from "react";
// import PropTypes from "prop-types";
import { graphql } from "gatsby";

// const groupFieldsByEndpoint = (fields) => {
  
// }

const Sidebar = ({ fields }) => {
  const query = graphql`
  query {
    dataYaml {
      paths {
        ${fields}
      }
    }
  }
`
  return (
    <div>

    </div>
  );
};

export default Sidebar;