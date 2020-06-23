import React from "react";

const FooterNav = () => (
  <footer className="c-site-footer" itemScope="itemscope" itemType="http://schema.org/WPFooter">
    <div className="o-layout__row c-site-footer__primary">
      <div className="o-layout__colset">
        <div className="o-layout__col">
          <div className="o-layout__module c-identity">
            <a className="c-identity__link" href="https://www.linode.com/" itemProp="url">
              <img alt="Linode Logo" className="c-identity__image" src="https://www.linode.com/wp-content/uploads/2018/10/linode-logo-blk-rgb-minified.svg" itemProp="image" data-no-lazy="1"></img>
            </a>
          </div>
          <div className="o-layout__module c-copyright">
            &copy; {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
        <div className="o-layout__col">
          <div className="o-layout__module">
            <nav className="o-menu">
              <h4 className="o-menu__heading">Why Linode</h4>
              <div className="menu-footer-why-linode-container">
                <ul id="menu-footer-why-linode" className="o-menu__list">
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/choosing-linode/">
                      <span className="o-menu__title">
                        Choosing Linode
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/support-experience/">
                      <span className="o-menu__title">
                        Support Experience
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://www.linode.com/predictable-pricing/">
                      <span className="o-menu__title">
                        Predictable Pricing
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/cloud-simplified/">
                      <span className="o-menu__title">
                        Cloud Simplified
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/global-infrastructure/">
                      <span className="o-menu__title">
                        Global Infrastructure
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/craft-of-code/">
                      <span className="o-menu__title">
                        Craft of Code
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/linode-for-business/">
                      <span className="o-menu__title">
                        Linode for Business
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/linode-vs-aws/">
                      <span className="o-menu__title">
                        Linode vs. AWS
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/open-cloud/">
                      <span className="o-menu__title">
                        Open Cloud
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/what-is-cloud-computing/">
                      <span className="o-menu__title">
                        What is Cloud Computing?
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="o-layout__col">
          <div className="o-layout__module">
            <nav className="o-menu">
              <h4 className="o-menu__heading">Products</h4>
              <div className="menu-footer-products-container">
                <ul id="menu-footer-products" className="o-menu__list">
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/products/">
                      <span className="o-menu__title">
                        Products Overview
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/products/kubernetes/">
                      <span className="o-menu__title">
                        Kubernetes
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/products/shared/">
                      <span className="o-menu__title">
                        Shared
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/products/dedicated-cpu/">
                      <span className="o-menu__title">
                        Dedicated CPU
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/products/high-memory/">
                      <span className="o-menu__title">
                        High Memory
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/products/gpu/">
                      <span className="o-menu__title">
                        GPU
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/products/block-storage/">
                      <span className="o-menu__title">
                        Block Storage
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/products/object-storage/">
                      <span className="o-menu__title">
                        Object Storage
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/products/backups/">
                      <span className="o-menu__title">
                        Backups
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/products/ddos/">
                      <span className="o-menu__title">
                        DDoS Protection
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/products/nodebalancers/">
                      <span className="o-menu__title">
                        NodeBalancers
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/products/dns-manager/">
                      <span className="o-menu__title">
                        DNS Manager
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/products/managed/">
                      <span className="o-menu__title">
                        Managed
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/products/pro-services/">
                      <span className="o-menu__title">
                        Professional Services
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="o-layout__col">
          <div className="o-layout__module">
            <nav className="o-menu">
              <h4 className="o-menu__heading">Solutions</h4>
              <div className="menu-footer-solutions-container">
                <ul id="menu-footer-solutions" className="o-menu__list">
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/solutions/">
                      <span className="o-menu__title">
                        Solutions Overview
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="o-layout__module">
            <nav className="o-menu">
              <h4 className="o-menu__heading">Marketplace</h4>
              <div className="menu-footer-marketplace-container">
                <ul id="menu-footer-marketplace" className="o-menu__list">
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/marketplace/">
                      <span className="o-menu__title">
                        Browse Marketplace
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/marketplace/app-partners/">
                      <span className="o-menu__title">
                        Marketplace App Partners
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="o-layout__module">
            <nav className="o-menu">
              <h4 className="o-menu__heading">Pricing</h4>
              <div className="menu-footer-pricing-container">
                <ul id="menu-footer-pricing" className="o-menu__list">
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/pricing/">
                      <span className="o-menu__title">
                        Pricing
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/estimator/">
                      <span className="o-menu__title">
                        Pricing Estimator
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="o-layout__module">
            <nav className="o-menu">
              <h4 className="o-menu__heading">Company</h4>
              <div className="menu-footer-company-container">
                <ul id="menu-footer-company" className="o-menu__list">
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/company/about/">
                      <span className="o-menu__title">
                        About
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/company/leadership/">
                      <span className="o-menu__title">
                        Leadership
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/partners/">
                      <span className="o-menu__title">
                        Partners
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/company/press/">
                      <span className="o-menu__title">
                        Press
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/company/careers/">
                      <span className="o-menu__title">
                        Careers
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/legal/">
                      <span className="o-menu__title">
                        Legal
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <div id="teconsent"></div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="o-layout__col">
          <div className="o-layout__module">
            <nav className="o-menu">
              <h4 className="o-menu__heading">Community</h4>
              <div className="menu-footer-community-container">
                <ul id="menu-footer-community" className="o-menu__list">
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/community/">
                      <span className="o-menu__title">
                        Community Overview
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://www.linode.com/community/questions/">
                      <span className="o-menu__title">
                        Q&amp;A
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/developers/">
                      <span className="o-menu__title">
                        Developer Portal
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/blog/">
                      <span className="o-menu__title">
                        Blog
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/events/">
                      <span className="o-menu__title">
                        Events
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/resources/">
                      <span className="o-menu__title">
                        Content Resources
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/video-channel/">
                      <span className="o-menu__title">
                        Linode Video Channel
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/referral-program/">
                      <span className="o-menu__title">
                        Referral Program
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/products/">
                      <span className="o-menu__title">
                        Swag Store
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/products/cloud-manager/">
                      <span className="o-menu__title">
                        Cloud Manager
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/products/api/">
                      <span className="o-menu__title">
                        API
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/docs/">
                      <span className="o-menu__title">
                        Documentation
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/distributions/">
                      <span className="o-menu__title">
                        Distributions
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/cloud-computing-terms/">
                      <span className="o-menu__title">
                        Cloud Computing Terms
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="o-layout__col">
          <div className="o-layout__module">
            <nav className="o-menu">
              <h4 className="o-menu__heading">Contact</h4>
              <div className="menu-footer-contact-container">
                <ul id="menu-footer-contact" className="o-menu__list">
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/support/">
                      <span className="o-menu__title">
                        Support
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://linode.com/company/contact/?tab=sales-inquiries">
                      <span className="o-menu__title">
                        Contact Sales
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://status.linode.com">
                      <span className="o-menu__title">
                        System Status
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a className="o-menu__link" href="https://login.linode.com/login">
                      <span className="o-menu__title">
                        Log in
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="o-layout__module c-social">
            <nav className="o-menu">
              <h4 className="o-menu__heading">Follow Us</h4>
                <ul className="o-menu__list">
                  <li className="o-menu__item">
                    <a href="https://twitter.com/linode/" className="o-menu__link">
                      <span className="o-menu__title">Twitter</span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a href="https://www.instagram.com/linode/" className="o-menu__link">
                      <span className="o-menu__title">Instagram</span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a href="https://www.youtube.com/linode/" className="o-menu__link">
                      <span className="o-menu__title">YouTube</span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a href="https://www.linkedin.com/company/linode/" className="o-menu__link">
                      <span className="o-menu__title">LinkedIn</span>
                    </a>
                  </li>
                  <li className="o-menu__item">
                    <a href="https://github.com/linode/" className="o-menu__link">
                      <span className="o-menu__title">Github</span>
                    </a>
                  </li>
                </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterNav;
