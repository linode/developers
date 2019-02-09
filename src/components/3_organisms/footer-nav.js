import React from "react";

import Facebook from "../../images/svgs/facebook.svg";
import Twitter from "../../images/svgs/twitter.svg";
import Googleplus from "../../images/svgs/googleplus.svg";
import Linkedin from "../../images/svgs/linkedin.svg";
import Github from "../../images/svgs/github.svg";

const FooterNav = () => (
  <div className="footer-nav container mx-auto max-w-xl">
    <div className="flex flex-wrap justify-between mb-4 -mx-4">
      <div className="w-full xs:w-1/2 sm:w-1/3 md:w-auto px-4">
        <h4 className="footer-nav-header mb-2">
          <a href="https://linode.com/linodes" target="_blank">
            Overview
          </a>
        </h4>
        <ul className="list-reset text-sm">
          <li>
            <a href="https://linode.com/pricing" target="_blank">
              Plans &amp; Pricing
            </a>
          </li>
          <li>
            <a href="https://linode.com/linodes" target="_blank">
              Features
            </a>
          </li>
          <li>
            <a href="https://linode.com/addons" target="_blank">
              Add-Ons
            </a>
          </li>
          <li>
            <a href="https://linode.com/managed" target="_blank">
              Managed
            </a>
          </li>
          <li>
            <a href="https://linode.com/professional-services" target="_blank">
              Professional Services
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full xs:w-1/2 sm:w-1/3 md:w-auto px-4">
        <h4 className="footer-nav-header mb-2">
          <a href="https://linode.com/docs" target="_blank">
            Resources
          </a>
        </h4>
        <ul className="list-reset text-sm">
          <li>
            <a href="https://linode.com/docs" target="_blank">
              Guides &amp; Tutorials
            </a>
          </li>
          <li>
            <a href="https://linode.com/speedtest" target="_blank">
              Speed Test
            </a>
          </li>
          <li>
            <a href="https://linode.com/community" target="_blank">
              Community
            </a>
          </li>
          <li>
            <a href="https://linode.com/chat" target="_blank">
              Chat
            </a>
          </li>
          <li>
            <a href="http://status.linode.com/" target="_blank">
              System Status
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full xs:w-1/2 sm:w-1/3 md:w-auto px-4">
        <h4 className="footer-nav-header mb-2">
          <a href="https://linode.com/about" target="_blank">
            Company
          </a>
        </h4>
        <ul className="list-reset text-sm">
          <li>
            <a href="https://linode.com/about" target="_blank">
              About Us
            </a>
          </li>
          <li>
            <a href="https://blog.linode.com/" target="_blank">
              Blog
            </a>
          </li>
          <li>
            <a href="https://linode.com/press" target="_blank">
              Press
            </a>
          </li>
          <li>
            <a href="https://linode.com/referrals" target="_blank">
              Referral System
            </a>
          </li>
          <li>
            <a href="https://linode.com/careers" target="_blank">
              Careers
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full xs:w-1/2 sm:w-1/3 md:w-auto px-4">
        <h4 className="footer-nav-header mb-2">
          <a href="https://linode.com/agreement" target="_blank">
            Legal
          </a>
        </h4>
        <ul className="list-reset text-sm">
          <li>
            <a href="https://linode.com/agreement" target="_blank">
              Customer Agreement
            </a>
          </li>
          <li>
            <a href="https://linode.com/tos" target="_blank">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="https://linode.com/privacy" target="_blank">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="https://linode.com/aup" target="_blank">
              Acceptable Use Policy
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full xs:w-1/2 sm:w-2/3 md:w-auto px-4">
        <h4 className="footer-nav-header mb-2">
          <a href="https://linode.com/contact" target="_blank">
            Contact Us
          </a>
        </h4>
        <ul className="list-reset text-sm">
          <li>
            <a href="tel:+18554546633">855-4-LINODE</a>
          </li>
          <li>
            <a href="tel:+18554546633">(855-454-6633)</a>
          </li>
          <li>
            <a href="tel:+16093807100">Intl.: +1 609-380-7100</a>
          </li>
          <li>
            <a href="mailto:support@linode.com">Email us</a>
          </li>
          <li className="footer-nav-social mt-1">
            <a
              target="_blank"
              href="https://twitter.com/linode"
              target="_blank"
            >
              <Twitter />
            </a>
            <a
              target="_blank"
              href="https://plus.google.com/+linode/"
              target="_blank"
            >
              <Googleplus />
            </a>
            <a
              target="_blank"
              href="https://facebook.com/linode"
              target="_blank"
            >
              <Facebook />
            </a>
            <a
              target="_blank"
              href="https://linkedin.com/company/linode"
              target="_blank"
            >
              <Linkedin />
            </a>
            <a
              target="_blank"
              href="https://github.com/linode/"
              target="_blank"
            >
              <Github />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default FooterNav;
