import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

const isPartiallyActive = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent
    ? {
        className:
          "dlc-nav__link text-BaseNavGrey hover:text-white relative active"
      }
    : null;

const DLCMenu = ({ data }) => {
  const { dlcLinks } = data.site.siteMetadata;
  return (
    <>
      <nav
        id="main-menu"
        role="menu"
        className="dlc-nav bg-white"
        aria-expanded="false"
      >
        <div className="max-w-3xl mx-auto px-4 py-4">
          {dlcLinks.map(link => (
            <Link
              key={link.name}
              to={link.link}
              className="dlc-nav__link relative mx-4"
              role="menuitem"
              activeClassName="active"
              getProps={link === "/" ? undefined : isPartiallyActive}
            >
              {link.name}
            </Link>
          ))}
        </div>
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
