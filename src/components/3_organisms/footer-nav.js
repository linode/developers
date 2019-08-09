import React from "react";
import Logo from "../../images/svgs/new-logo.svg";

import Github from "../../images/svgs/github.svg";
import Instagram from "../../images/svgs/instagram.svg";
import Linkedin from "../../images/svgs/linkedin.svg";
import Twitter from "../../images/svgs/twitter.svg";
import Youtube from "../../images/svgs/youtube.svg";

// @todo update links once we have them, these were just guesses based on current setup
const FooterNav = () => (
  <div className="footer-nav mx-auto">
    <div className="flex flex-wrap justify-between mb-4 -mx-4">
      <div className="w-full md:w-1/6 px-4">
        <div className="footer-logo-outer ml-4">
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
      <div className="w-full md:w-1/6 px-4">
        <div>
          <h4 className="footer-nav-header mb-4">Why Linode</h4>
          <ul className="list-reset text-sm footer-sublist">
            <li>
              <a
                href="https://linode.com/linodes"
                target="_blank"
                rel="noopener noreferrer"
              >
                Choosing Linode
              </a>
            </li>
            <li>
              <a
                href="https://linode.com/linodes"
                target="_blank"
                rel="noopener noreferrer"
              >
                Support Experience
              </a>
            </li>
            <li>
              <a
                href="https://linode.com/linodes"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cloud Simplified
              </a>
            </li>
            <li>
              <a
                href="https://linode.com/linodes"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linode vs. AWS
              </a>
            </li>
            <li>
              <a
                href="https://linode.com/linodes"
                target="_blank"
                rel="noopener noreferrer"
              >
                Global Infrastructure
              </a>
            </li>
            <li>
              <a
                href="https://linode.com/about"
                target="_blank"
                rel="noopener noreferrer"
              >
                Craft of Code
              </a>
            </li>
            <li>
              <a
                href="https://linode.com/about"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linode for Business
              </a>
            </li>
            <li>
              <a
                href="https://linode.com/about"
                target="_blank"
                rel="noopener noreferrer"
              >
                What is Cloud Computing
              </a>
            </li>
            <li>
              <a
                href="https://linode.com/about"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Cloud
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-1/6 px-4">
        <h4 className="footer-nav-header mb-4">Products</h4>
        <ul className="list-reset text-sm footer-sublist">
          <li>
            <a
              href="https://linode.com/linodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/linodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kubernetes
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/linodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nanodes
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/linodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Standard Linodes
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/linodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              High Memory Linodes
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/linodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dedicated CPU
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/linodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Block Storage
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/linodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Object Storage
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/linodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Backups
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/linodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              One-Click Apps
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/linodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              NodeBalancers
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/linodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              DNS Manager
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/linodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Managed
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/linodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Professional Services
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/6 px-4">
        <div>
          <h4 className="footer-nav-header mb-4">Solutions</h4>
          <ul className="list-reset text-sm footer-sublist">
            <li>
              <a
                href="https://linode.com/docs"
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
                  href="https://linode.com/pricing"
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
                  href="https://linode.com/agreement"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://linode.com/tos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leadership
                </a>
              </li>
              <li>
                <a
                  href="https://linode.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="https://linode.com/aup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="https://linode.com/security"
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
      <div className="w-full md:w-1/6 px-4">
        <h4 className="footer-nav-header mb-4">Community</h4>
        <ul className="list-reset text-sm footer-sublist">
          <li>
            <a
              href="https://linode.com/linodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Community Overview
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/linodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Q&amp;A
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/linodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Developer Portal
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/linodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/linodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Events
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/linodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resources
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/linodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Swag Store
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/linodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Newsletter
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/linodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Startup Program
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/linodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Referral Program
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/linodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              API
            </a>
          </li>
          <li>
            <a
              href="https://linode.com/linodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/6 px-4">
        <div>
          <h4 className="footer-nav-header mb-4">Contact</h4>
          <ul className="list-reset text-sm footer-sublist">
            <li>
              <a
                href="https://linode.com/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://linode.com/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="https://linode.com/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Sales
              </a>
            </li>
            <li>
              <a
                href="https://linode.com/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                System Status
              </a>
            </li>
          </ul>
          <div>
            <h4 className="footer-nav-header mb-4">Follow Us</h4>
            <ul className="list-reset text-sm footer-sublist">
              <li>
                <a
                  href="https://linode.com/pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-a"
                >
                  <Twitter className="footer-social-icon" />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linode.com/pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-a"
                >
                  <Instagram className="footer-social-icon" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linode.com/pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-a"
                >
                  <Youtube className="footer-social-icon" />
                  Youtube
                </a>
              </li>
              <li>
                <a
                  href="https://linode.com/pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-a"
                >
                  <Linkedin className="footer-social-icon" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://linode.com/pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-a"
                >
                  <Github className="footer-social-icon" />
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FooterNav;
