import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import DLCMenu from "../2_molecules/DLCMenu";
import Banner from "../3_organisms/banner";
import Header from "../3_organisms/header";
import FooterNav from "../3_organisms/footer-nav";
import "../../css/main.css";

const Layout = ({ children, title, subtitle, fullWidth, noFooter }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className={`content ${fullWidth ? "layout-fixed" : ""}`}>
        <Header
          siteTitle={data.site.siteMetadata.title}
          dlcLinks={data.site.siteMetadata.dlcLinks}
        />
        {(title || subtitle) && <Banner title={title} subtitle={subtitle} />}
        <DLCMenu />
        <div
          className={`main-wrapper ${
            !fullWidth ? "max-w-3xl mx-auto px-4 py-2" : ""
          }`}
        >
          <main className="main">{children}</main>
        </div>
        {!fullWidth && !noFooter && (
          <FooterNav />
        )}
        <div id="consent_blackbar"></div>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
