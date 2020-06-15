import React from "react";

import Logo from "../../images/svgs/new-logo.svg";
import Github from "../../images/svgs/github.svg";
import Instagram from "../../images/svgs/instagram.svg";
import Linkedin from "../../images/svgs/linkedin.svg";
import Twitter from "../../images/svgs/twitter.svg";
import Youtube from "../../images/svgs/youtube.svg";

const FooterNav = () => (
  <div className="footer-nav">
    <div className="footer-nav-inner">
      <div className="footer-nav-grid">
        <div className="footer-logo-outer">
          <div>
            <Logo className="footer-logo" />
          </div>
          <div>
            <p className="copyright">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="sm-down-hidden footer-nav-grid">
        <div>
          <h4 className="footer-nav-header">Why Linode</h4>
          <ul className="footer-sublist">
            <li>
              <a href="https://linode.com/choosing-linode/">Choosing Linode</a>
            </li>
            <li>
              <a href="https://linode.com/support-experience/">
                Support Experience
              </a>
            </li>
            <li>
              <a href="https://www.linode.com/predictable-pricing/">
                Predictable Pricing
              </a>
            </li>
            <li>
              <a href="https://linode.com/cloud-simplified/">
                Cloud Simplified
              </a>
            </li>
            <li>
              <a href="https://linode.com/global-infrastructure/">
                Global Infrastructure
              </a>
            </li>
            <li>
              <a href="https://linode.com/craft-of-code/">Craft of Code</a>
            </li>
            <li>
              <a href="https://linode.com/linode-for-business/">
                Linode for Business
              </a>
            </li>
            <li>
              <a href="https://linode.com/linode-vs-aws/">
                Linode vs. AWS
              </a>
            </li>
            <li>
              <a href="https://linode.com/open-cloud/">Open Cloud</a>
            </li>
            <li>
              <a href="https://linode.com/what-is-cloud-computing/">
                What is Cloud Computing
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="sm-down-hidden footer-nav-grid">
        <h4 className="footer-nav-header">Products</h4>
        <ul className="footer-sublist">
          <li>
            <a href="https://linode.com/products/">Products</a>
          </li>
          <li>
            <a href="https://linode.com/products/kubernetes/">Kubernetes</a>
          </li>
          <li>
            <a href="https://linode.com/products/shared/">
              Shared
            </a>
          </li>
          <li>
            <a href="https://linode.com/products/high-memory/">
              High Memory Linodes
            </a>
          </li>
          <li>
            <a href="https://linode.com/products/dedicated-cpu/">
              Dedicated CPU
            </a>
          </li>
          <li>
            <a href="https://linode.com/products/gpu/">
              GPU
            </a>
          </li>
          <li>
            <a href="https://linode.com/products/block-storage/">
              Block Storage
            </a>
          </li>
          <li>
            <a href="https://linode.com/products/object-storage/">
              Object Storage
            </a>
          </li>
          <li>
            <a href="https://linode.com/products/backups/">Backups</a>
          </li>
          <li>
            <a href="https://linode.com/products/ddos/">
              DDoS Protection
            </a>
          </li>
          <li>
            <a href="https://linode.com/products/nodebalancers/">
              NodeBalancers
            </a>
          </li>
          <li>
            <a href="https://linode.com/products/dns-manager/">DNS Manager</a>
          </li>
          <li>
            <a href="https://linode.com/products/managed/">Managed</a>
          </li>
          <li>
            <a href="https://linode.com/products/pro-services/">
              Professional Services
            </a>
          </li>
        </ul>
      </div>
      <div className="sm-down-hidden footer-nav-grid">
        <div>
          <h4 className="footer-nav-header mb-4">Solutions</h4>
          <ul className="list-reset text-sm footer-sublist">
            <li>
              <a href="https://linode.com/solutions/">Solutions Overview</a>
            </li>
          </ul>
          <h4 className="footer-nav-header mb-4">Marketplace</h4>
          <ul className="list-reset text-sm footer-sublist">
            <li>
              <a href="https://linode.com/marketplace/">Browse Marketplace</a>
            </li>
            <li>
              <a href="https://linode.com/marketplace/app-partners/">Submit Marketplace App</a>
            </li>
          </ul>
          <div>
            <h4 className="footer-nav-header mb-4">Pricing</h4>
            <ul className="list-reset text-sm footer-sublist">
              <li>
                <a href="https://linode.com/pricing/">Pricing</a>
              </li>
              <li>
                <a href="https://linode.com/estimator/">Pricing Estimator</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="footer-nav-header mb-4">Company</h4>
            <ul className="list-reset text-sm footer-sublist">
              <li>
                <a href="https://linode.com/company/about/">About</a>
              </li>
              <li>
                <a href="https://linode.com/company/leadership/">Leadership</a>
              </li>
              <li>
                <a href="https://linode.com/partners/">Partners</a>
              </li>
              <li>
                <a href="https://linode.com/company/press/">Press</a>
              </li>
              <li>
                <a href="https://linode.com/company/careers/">Careers</a>
              </li>
              <li>
                <a href="https://linode.com/legal/">
                  Legal
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sm-down-hidden footer-nav-grid">
        <h4 className="footer-nav-header">Community</h4>
        <ul className="footer-sublist">
          <li>
            <a href="https://linode.com/community/">Community Overview</a>
          </li>
          <li>
            <a href="https://www.linode.com/community/questions/">Q&amp;A</a>
          </li>
          <li>
            <a href="https://linode.com/developers/">Developer Portal</a>
          </li>
          <li>
            <a href="https://linode.com/blog/">Blog</a>
          </li>
          <li>
            <a href="https://linode.com/events/">Events</a>
          </li>
          <li>
            <a href="https://linode.com/resources/">Content Resources</a>
          </li>
          <li>
            <a href="https://linode.com/video-channel/">Linode Video Channel</a>
          </li>
          <li>
            <a href="https://linode.com/referral-program/">Referral Program</a>
          </li>
          <li>
            <a href="https://linode.com/products/">Swag Store</a>
          </li>
          <li>
            <a href="https://linode.com/products/cloud-manager/">Cloud Manager</a>
          </li>
          <li>
            <a href="https://linode.com/products/api/">API</a>
          </li>
          <li>
            <a href="https://linode.com/docs/">Documentation</a>
          </li>
          <li>
            <a href="https://linode.com/distributions/">Distributions</a>
          </li>
          <li>
            <a href="https://linode.com/cloud-computing-terms/">
              Cloud Computing Terms
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-nav-grid">
        <div className="sm-down-hidden">
          <h4 className="footer-nav-header">Contact</h4>
          <ul className="footer-sublist">
            <li>
              <a href="https://linode.com/support/">Support</a>
            </li>
            <li>
              <a href="https://linode.com/company/contact/?tab=sales-inquiries">
                Contact Sales
              </a>
            </li>
            <li>
              <a href="https://status.linode.com">System Status</a>
            </li>
            <li>
              <a href="https://login.linode.com/login">Log in</a>
            </li>
          </ul>
        </div>
        <div className="footer-social-outer">
          <h4 className="footer-nav-header footer-nav-header--social">
            Follow Us
          </h4>
          <ul className="footer-sublist">
            <li>
              <a
                href="https://twitter.com/linode/"
                className="footer-social-a"
                title="Twitter"
              >
                <Twitter className="footer-social-icon" />
                <span className="footer-social-label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/linode/"
                className="footer-social-a"
                title="Instagram"
              >
                <Instagram className="footer-social-icon" />
                <span className="footer-social-label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/linode/"
                className="footer-social-a"
                title="YouTube"
              >
                <Youtube className="footer-social-icon" />
                <span className="footer-social-label">YouTube</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/linode/"
                className="footer-social-a"
                title="LinkedIn"
              >
                <Linkedin className="footer-social-icon" />
                <span className="footer-social-label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/linode/"
                className="footer-social-a"
                title="Github"
              >
                <Github className="footer-social-icon" />
                <span className="footer-social-label">Github</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default FooterNav;
