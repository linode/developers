import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

const MainSiteNav = ({ data }) => {
  const { mainSiteNav } = data.site.siteMetadata;
  return (
    <>
      <nav
        id="main-menu"
        role="menu"
        className="main-nav"
        aria-expanded="false"
      >
        {mainSiteNav.map(link => (
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
      query mainSiteNav {
        site {
          siteMetadata {
            mainSiteNav {
              name
              link
            }
          }
        }
      }
    `}
    render={data => <MainSiteNav data={data} {...props} />}
  />
);
