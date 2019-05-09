import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

const MainSiteNav = ({ data }) => {
  const { mainSiteNav } = data.site.siteMetadata;
  return (
    <>
      <nav id="main-menu" role="menu" className="" aria-expanded="false">
        {mainSiteNav.map(link => (
          <Link
            key={link.name}
            to={link.link}
            className="nav-link text-BaseText hover:text-black relative text-lg mx-4"
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
