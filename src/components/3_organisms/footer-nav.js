import React from "react";

const FooterNav = () => (
  <footer className="c-site-footer" itemScope="itemscope" itemType="http://schema.org/WPFooter">
    <div className="o-layout__row c-site-footer__primary">
      <div className="o-layout__colset">
        <div className="o-layout__col">
          <div className="o-layout__module c-identity">
            <a className="c-identity__link" href="https://www.linode.com/" itemProp="url">
              <img className="c-identity__image" src="https://www.linode.com/wp-content/uploads/2018/10/linode-logo-blk-rgb-minified.svg" alt="linode-logo-blk-rgb-minified" itemProp="image" data-no-lazy="1"></img>
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
                  <li className="o-menu__item o-menu__item--choosing-linode">
                    <a className="o-menu__link" href="https://linode.com/choosing-linode/">
                      <span className="o-menu__title">
                        <span className="title">
                          Choosing Linode
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--suport-experience">
                    <a className="o-menu__link" href="https://linode.com/support-experience/">
                      <span className="o-menu__title">
                        <span className="title">
                          Support Experience
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--predictable-pricing">
                    <a className="o-menu__link" href="https://www.linode.com/predictable-pricing/">
                      <span className="o-menu__title">
                        <span className="title">
                          Predictable Pricing
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--cloud-simplified">
                    <a className="o-menu__link" href="https://linode.com/cloud-simplified/">
                      <span className="o-menu__title">
                        <span className="title">
                          Cloud Simplified
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--global-infrastructure">
                    <a className="o-menu__link" href="https://linode.com/global-infrastructure/">
                      <span className="o-menu__title">
                        <span className="title">
                          Global Infrastructure
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--craft-of-code">
                    <a className="o-menu__link" href="https://linode.com/craft-of-code/">
                      <span className="o-menu__title">
                        <span className="titlee">
                          Craft of Code
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--linode-for-business">
                    <a className="o-menu__link" href="https://linode.com/linode-for-business/">
                      <span className="o-menu__title">
                        <span className="title">
                          Linode for Business
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--linode-vs-aws">
                    <a className="o-menu__link" href="https://linode.com/linode-vs-aws/">
                      <span className="o-menu__title">
                        <span className="title">
                          Linode vs. AWS
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--open-cloud">
                    <a className="o-menu__link" href="https://linode.com/open-cloud/">
                      <span className="o-menu__title">
                        <span className="title">
                          Open Cloud
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--what-is-cloud-computing">
                    <a className="o-menu__link" href="https://linode.com/what-is-cloud-computing/">
                      <span className="o-menu__title">
                        <span className="title">
                          What is Cloud Computing?
                        </span>
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
                  <li className="o-menu__item o-menu__item--products">
                    <a className="o-menu__link" href="https://linode.com/products/">
                      <span className="o-menu__title">
                        <span className="title">
                          Products
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--kubernetes">
                    <a className="o-menu__link" href="https://linode.com/products/kubernetes/">
                      <span className="o-menu__title">
                        <span className="title">
                          Kubernetes
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--Nanodes">
                    <a className="o-menu__link" href="https://linode.com/products/nanodes/">
                      <span className="o-menu__title">
                        <span className="title">
                          Nanodes
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--standard-linodes">
                    <a className="o-menu__link" href="https://linode.com/products/standard-linodes/">
                      <span className="o-menu__title">
                        <span className="title">
                          Standard Linodes
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--high-memory-linodes">
                    <a className="o-menu__link" href="https://linode.com/products/high-memory/">
                      <span className="o-menu__title">
                        <span className="title">
                          High Memory Linodes
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--dedicated-cpu">
                    <a className="o-menu__link" href="https://linode.com/products/dedicated-cpu/">
                      <span className="o-menu__title">
                        <span className="title">
                          Dedicated CPU
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--gpu">
                    <a className="o-menu__link" href="https://linode.com/products/gpu/">
                      <span className="o-menu__title">
                        <span className="title">
                          GPU
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--block-storage">
                    <a className="o-menu__link" href="https://linode.com/products/block-storage/">
                      <span className="o-menu__title">
                        <span className="title">
                          Block Storage
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--object-storage">
                    <a className="o-menu__link" href="https://linode.com/products/object-storage/">
                      <span className="o-menu__title">
                        <span className="title">
                          Object Storage
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--backups">
                    <a className="o-menu__link" href="https://linode.com/products/backups/">
                      <span className="o-menu__title">
                        <span className="title">
                          Backups
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--ddos-protection">
                    <a className="o-menu__link" href="https://linode.com/products/ddos/">
                      <span className="o-menu__title">
                        <span className="title">
                          DDoS Protection
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item omenu__item--nodebalancers">
                    <a className="o-menu__link" href="https://linode.com/products/nodebalancers/">
                      <span className="o-menu__title">
                        <span className="title">
                          NodeBalancers
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--dns-manager">
                    <a className="o-menu__link" href="https://linode.com/products/dns-manager/">
                      <span className="o-menu__title">
                        <span className="title">
                          DNS Manager
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--managed">
                    <a className="o-menu__link" href="https://linode.com/products/managed/">
                      <span className="o-menu__title">
                        <span className="title">
                          Managed
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--professional-services">
                    <a className="o-menu__link" href="https://linode.com/products/pro-services/">
                      <span>
                        <span>
                          Professional Services
                        </span>
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
                  <li className="o-menu__item o-menu__item--solutions-overview">
                    <a className="o-menu__link" href="https://linode.com/solutions/">
                      <span className="o-menu__title">
                        <span className="title">
                          Solutions Overview
                        </span>
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
                  <li className="o-menu__item o-menu__item--browse-marketplace">
                    <a className="o-menu__link" href="https://linode.com/marketplace/">
                      <span className="o-menu__title">
                        <span className="title">
                          Browse Marketplace
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--marketplace-app-partners">
                    <a className="o-menu__link" href="https://linode.com/marketplace/app-partners/">
                      <span className="o-menu__title">
                        <span className="title">
                          Marketplace App Partners
                        </span>
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
                  <li className="o-menu__item o-menu__item--pricing">
                    <a className="o-menu__link" href="https://linode.com/pricing/">
                      <span className="o-menu__title">
                        <span className="title">
                          Pricing
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--pricing-estimator">
                    <a className="o-menu__link" href="https://linode.com/estimator/">
                      <span className="o-menu__title">
                        <span className="title">
                          Pricing Estimator
                        </span>
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
                  <li className="o-menu__item o-menu__item--about">
                    <a className="o-menu__link" href="https://linode.com/company/about/">
                      <span className="o-menu__title">
                        <span className="title">
                          About
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--leadership">
                    <a className="o-menu__link" href="https://linode.com/company/leadership/">
                      <span className="o-menu__title">
                        <span className="title">
                          Leadership
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--partners">
                    <a className="o-menu__link" href="https://linode.com/partners/">
                      <span className="o-menu__title">
                        <span className="title">
                          Partners
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--press">
                    <a className="o-menu__link" href="https://linode.com/company/press/">
                      <span className="o-menu__title">
                        <span className="title">
                          Press
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--careers">
                    <a className="o-menu__link" href="https://linode.com/company/careers/">
                      <span className="o-menu__title">
                        <span className="title">
                          Careers
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--legal">
                    <a className="o-menu__link" href="https://linode.com/legal/">
                      <span className="o-menu__title">
                        <span className="title">
                          Legal
                        </span>
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
              <h4 className="o-menu__heading">Community</h4>
              <div className="menu-footer-community-container">
                <ul id="menu-footer-community" className="o-menu__list">
                  <li className="o-menu__item o-menu__item--community-overview">
                    <a className="o-menu__link" href="https://linode.com/community/">
                      <span className="o-menu__title">
                        <span className="title">
                          Community Overview
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--o-a">
                    <a className="o-menu__link" href="https://www.linode.com/community/questions/">
                      <span className="o-menu__title">
                        <span className="title">
                          Q&amp;A
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--developer-portal">
                    <a className="o-menu__link" href="https://linode.com/developers/">
                      <span className="o-menu__title">
                        <span className="title">
                          Developer Portal
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--blog">
                    <a className="o-menu__link" href="https://linode.com/blog/">
                      <span className="o-menu__title">
                        <span className="title">
                          Blog
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--events">
                    <a className="o-menu__link" href="https://linode.com/events/">
                      <span className="o-menu__title">
                        <span className="title">
                          Events
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--content-resources">
                    <a className="o-menu__link" href="https://linode.com/resources/">
                      <span className="o-menu__title">
                        <span className="title">
                          Content Resources
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--linode-video-channel">
                    <a className="o-menu__link" href="https://linode.com/video-channel/">
                      <span className="o-menu__title">
                        <span className="title">
                          Linode Video Channel
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--referral-program">
                    <a className="o-menu__link" href="https://linode.com/referral-program/">
                      <span className="o-menu__title">
                        <span className="title">
                          Referral Program
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--swag-store">
                    <a className="o-menu__link" href="https://linode.com/products/">
                      <span className="o-menu__title">
                        <span className="title">
                          Swag Store
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--cloud-manager">
                    <a className="o-menu__link" href="https://linode.com/products/cloud-manager/">
                      <span className="o-menu__title">
                        <span className="title">
                          Cloud Manager
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--api">
                    <a className="o-menu__link" href="https://linode.com/products/api/">
                      <span className="o-menu__title">
                        <span className="title">
                          API
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--documentation">
                    <a className="o-menu__link" href="https://linode.com/docs/">
                      <span className="o-menu__title">
                        <span className="title">
                          Documentation
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--distributions">
                    <a className="o-menu__link" href="https://linode.com/distributions/">
                      <span className="o-menu__title">
                        <span className="title">
                          Distributions
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--cloud-computing-terms">
                    <a className="o-menu__link" href="https://linode.com/cloud-computing-terms/">
                      <span className="o-menu__title">
                        <span className="title">
                          Cloud Computing Terms
                        </span>
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
                  <li className="o-menu__item o-menu__item--support">
                    <a className="o-menu__link" href="https://linode.com/support/">
                      <span className="o-menu__title">
                        <span className="title">
                          Support
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--contact-sales">
                    <a className="o-menu__link" href="https://linode.com/company/contact/?tab=sales-inquiries">
                      <span className="o-menu__title">
                        <span className="title">
                          Contact Sales
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--system-status">
                    <a className="o-menu__link" href="https://status.linode.com">
                      <span className="o-menu__title">
                        <span className="title">
                          System Status
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="o-menu__item o-menu__item--log-in">
                    <a className="o-menu__link" href="https://login.linode.com/login">
                      <span className="o-menu__title">
                        <span className="title">
                          Log in
                        </span>
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
