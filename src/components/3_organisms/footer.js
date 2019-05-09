import React from "react";

// @todo update social icons to reflect marketing site
import Facebook from "../../images/svgs/facebook.svg";
import Twitter from "../../images/svgs/twitter.svg";
import Googleplus from "../../images/svgs/googleplus.svg";
import Logo from "../../images/svgs/logo.svg";
// import Linkedin from "../../images/svgs/linkedin.svg";
// import Github from "../../images/svgs/github.svg";

const Footer = () => (
  <div className="footer-links container mx-auto">
    <div className="flex flex-wrap items-center justify-between">
      <div className="xs-full sm-1/2 px-2">
        <div className="flex items-center">
          <div className="mr-4">
            <Logo />
          </div>
          &copy; {new Date().getFullYear()} Linode, LLC. All rights reserved.
        </div>
      </div>
      <div className="xs-full sm:items-end px-2">
        <ul className="list-reset text-sm">
          <li className="footer-nav-social mt-1">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/linode"
            >
              <Twitter />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://plus.google.com/+linode/"
            >
              <Googleplus />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://facebook.com/linode"
            >
              <Facebook />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Footer;
