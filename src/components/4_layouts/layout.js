import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Banner from "../3_organisms/banner";
import Header from "../3_organisms/header";
import Footer from "../3_organisms/footer";
import FooterNav from "../3_organisms/footer-nav";
import "../../css/main.css";

const Layout = ({ children, title, subtitle }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <div className="content">
        <Header
          siteTitle={data.site.siteMetadata.title}
          menuLinks={data.site.siteMetadata.menuLinks}
        />
        {title && subtitle && <Banner title={title} subtitle={subtitle} />}
        <div className="main-wrapper max-w-3xl mx-auto py-2 px-4 md:px-8">
          <main className="main">{children}</main>
        </div>
        <div className="footer-nav-wrapper bg-black">
          <footer className="max-w-3xl mx-auto py-8 px-4 md:px-8 text-white">
            <Footer />
          </footer>
        </div>
        <div className="footer-wrapper bg-BaseBlackFull">
          <footer className="max-w-3xl mx-auto py-8 px-4 md:px-8 text-white">
            <FooterNav />
          </footer>
        </div>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
