import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

const MainSiteGlobalMenu = ({ data }) => {
  const { mainSiteGlobalMenu } = data.site.siteMetadata;
  return (
    <>
      <nav
        id="main-menu"
        role="menu"
        className="main-nav"
        aria-expanded="false"
      >
        {mainSiteGlobalMenu.map(link => (
          <Link
            key={link.name}
            to={link.link}
            className="main-nav-link text-BaseNavGrey hover:text-white relative"
            role="menuitem"
            activeClassName="active"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query mainSiteGlobalMenu {
        site {
          siteMetadata {
            mainSiteGlobalMenu {
              name
              link
            }
          }
        }
      }
    `}
    render={data => <MainSiteGlobalMenu data={data} {...props} />}
  />
);
