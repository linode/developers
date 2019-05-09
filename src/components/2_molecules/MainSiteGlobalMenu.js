import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

const MainSiteGlobalMenu = ({ data }) => {
  const { mainSiteGlobalMenu } = data.site.siteMetadata;
  return (
    <div className="max-w-3xl mx-auto flex justify-end">
      <nav
        id="main-menu"
        role="menu"
        className="px-4 md:px-8"
        aria-expanded="false"
      >
        {mainSiteGlobalMenu.map(link => (
          <Link
            key={link.name}
            to={link.link}
            className="main-nav-link text-BaseText hover:text-black relative text-sm"
            role="menuitem"
            activeClassName="active"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
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
