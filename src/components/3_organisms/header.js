import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

const Logo = ({ data }) => {
  const name = data.site.siteMetadata.title;
  return (
    <div>
      <Link to="/">{name}</Link>
      <Link to="/guides">Guides</Link>
    </div>
  );
};

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => <Logo data={data} />}
    />
  );
};

export default Header;
