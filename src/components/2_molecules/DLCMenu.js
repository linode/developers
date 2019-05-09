import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

const isPartiallyActive = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent
    ? {
        className:
          "main-nav-link text-BaseNavGrey hover:text-white relative active"
      }
    : null;

const DLCMenu = ({ data }) => {
  const { dlcLinks } = data.site.siteMetadata;
  return (
    <>
      <nav
        id="main-menu"
        role="menu"
        className="main-nav mb-8"
        aria-expanded="false"
      >
        {dlcLinks.map(link => (
          <Link
            key={link.name}
            to={link.link}
            className="nav-link text-white underline hover:text-white hover:no-underline relative mx-2"
            role="menuitem"
            activeClassName="active"
            getProps={link === "/" ? undefined : isPartiallyActive}
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
      query HeaderMenus {
        site {
          siteMetadata {
            dlcLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => <DLCMenu data={data} {...props} />}
  />
);
