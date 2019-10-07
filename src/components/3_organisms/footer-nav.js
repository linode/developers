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
              <a
                href="https://linode.com/choosing-linode/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Choosing Linode
              </a>
            </li>
            <li>
              <a
                href="https://linode.com/support-experience/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Support Experience
              </a>
            </li>
            <li>
              <a
                href="https://linode.com/cloud-simplified/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cloud Simplified
              </a>
            </li>
            <li>
              <a
                href="https://linode.com/global-infrastructure/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Global Infrastructure
              </a>
            </li>
            <li>
              <a
                href="https://linode.com/craft-of-code/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Craft of Code
              </a>
            </li>
            <li>
              <a
                href="https://linode.com/linode-for-business/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linode for Business
              </a>
            </li>
            <li>
              <a
                href="https://linode.com/what-is-cloud-computing/"
                target="_blank"
                rel="noopener noreferrer"
              >
                What is Cloud Computing
              </a>
            </li>
            <li>
              <a
                href="https://linode.com/open-cloud/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Cloud
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="sm-down-hidden footer-nav-grid">
        <h4 className="footer-nav-header">Products</h4>
        <ul className="footer-sublist">
          <li>
            <a
              href="https://linode.com/products/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/products/kubernetes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kubernetes
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/products/nanodes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nanodes
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/products/standard-linodes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Standard Linodes
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/products/high-memory/"
              target="_blank"
              rel="noopener noreferrer"
            >
              High Memory Linodes
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/products/dedicated-cpu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dedicated CPU
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/products/block-storage/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Block Storage
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/products/object-storage/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Object Storage
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/products/backups/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Backups
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/products/one-click-apps/"
              target="_blank"
              rel="noopener noreferrer"
            >
              One-Click Apps
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/products/nodebalancers/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NodeBalancers
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/products/dns-manager/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DNS Manager
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/products/managed/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Managed
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/products/pro-services/"
              target="_blank"
              rel="noopener noreferrer"
            >
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
              <a
                href="https://linode.com/solutions/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solutions Overview
              </a>
            </li>
          </ul>
          <div>
            <h4 className="footer-nav-header mb-4">Pricing</h4>
            <ul className="list-reset text-sm footer-sublist">
              <li>
                <a
                  href="https://linode.com/pricing/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="footer-nav-header mb-4">Company</h4>
            <ul className="list-reset text-sm footer-sublist">
              <li>
                <a
                  href="https://linode.com/company/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://linode.com/company/leadership/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leadership
                </a>
              </li>
              <li>
                <a
                  href="https://linode.com/company/press/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="https://linode.com/company/careers/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="https://linode.com/legal-security/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Legal &amp; Security
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
            <a
              href="https://linode.com/community/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Community Overview
            </a>
          </li>
          <li>
            <a
              href="https://www.linode.com/community/questions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Q&amp;A
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/developers/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Developer Portal
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/blog/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/events/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Events
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/resources/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Content Resources
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/products/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Swag Store
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/referral-program/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Referral Program
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/products/api/"
              target="_blank"
              rel="noopener noreferrer"
            >
              API
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/docs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/cloud-computing-terms/"
              target="_blank"
              rel="noopener noreferrer"
            >
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
              <a
                href="https://linode.com/company/contact/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://linode.com/support/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="https://linode.com/company/contact/?tab=sales-inquiries"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Sales
              </a>
            </li>
            <li>
              <a
                href="https://status.linode.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                System Status
              </a>
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
                target="_blank"
                rel="noopener noreferrer"
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
                target="_blank"
                rel="noopener noreferrer"
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
                target="_blank"
                rel="noopener noreferrer"
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
                target="_blank"
                rel="noopener noreferrer"
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
                target="_blank"
                rel="noopener noreferrer"
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
