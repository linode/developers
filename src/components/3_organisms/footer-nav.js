import React from "react";

const styles = {
  display: "none"
};

class FooterNav extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "/assets/footer-inline.js";
    script.async = true;
    document.querySelector('.c-site-footer').parentNode.appendChild(script);
  }
  render() {
    return (
<footer>
  <div className="c-site-footer">

    <svg xmlns="http://www.w3.org/2000/svg" style={styles}>

      <symbol id="icon--github" viewBox="0 0 496 512">
        <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
      </symbol>

      <symbol id="icon--instagram" viewBox="0 0 448 512">
        <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
      </symbol>

      <symbol id="icon--linkedin" viewBox="0 0 448 512">
        <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
      </symbol>

      <symbol id="icon--youtube" viewBox="0 0 576 512">
        <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
      </symbol>

      <symbol id="icon--twitter" viewBox="0 0 512 512">
        <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
      </symbol>

    </svg>
    <div className="o-layout__row c-site-footer__primary">
      <div className="o-layout__colset">
        <div className="o-layout__col">

          <div className="o-layout__module c-identity">
            <a className="c-identity__link" href="https://www.linode.com" target="_self" itemProp="url">
              <img width="160" height="55" alt="Logo" className="c-identity__image" src="https://www.linode.com/wp-content/themes/linode-website-theme/images/logo.svg?ver=1678132180" itemProp="image" data-no-lazy="1" />
            </a>
          </div>

          <div className="o-layout__module c-copyright">
            © 2003-2023 Linode LLC. <br />All rights reserved.
          </div>

          <div className="o-layout__module c-consent">
            <div id="teconsent"></div>
          </div>

          <div className="o-layout__module c-social --mobile">
            <a href="https://twitter.com/linode">
              <svg className="o-icon" alt="Twitter Logo"><use xlinkHref="#icon--twitter"></use></svg>
            </a>
            <a href="https://www.instagram.com/linode/">
              <svg className="o-icon" alt="Instagram Logo"><use xlinkHref="#icon--instagram"></use></svg>
            </a>
            <a href="https://www.youtube.com/linode">
              <svg className="o-icon" alt="YouTube Logo"><use xlinkHref="#icon--youtube"></use></svg>
            </a>
            <a href="https://www.linkedin.com/company/linode/">
              <svg className="o-icon" alt="LinkedIn Logo"><use xlinkHref="#icon--linkedin"></use></svg>
            </a>
            <a href="https://github.com/linode/">
              <svg className="o-icon" alt="Github Logo"><use xlinkHref="#icon--github"></use></svg>
            </a>
          </div>

          <div className="o-layout__module --mobile">
            <nav className="o-menu">
              <ul className="o-menu__list --d0">
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/site-map/"><span className="o-menu__title">Site Map</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/support/"><span className="o-menu__title">Support</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/partners/"><span className="o-menu__title">Partners</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/company/careers/"><span className="o-menu__title">Careers</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/company/press/"><span className="o-menu__title">Press Center</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/legal/"><span className="o-menu__title">Legal Center</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://status.linode.com"><span className="o-menu__title">System Status</span></a>
                </li>
              </ul>
            </nav>
          </div>

        </div>
        <div className="o-layout__col">

          <div className="o-layout__module">
            <nav className="o-menu">
              <h4 className="o-menu__heading">Why Choose Us</h4>
              <ul className="o-menu__list --d0">
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/choosing-linode/"><span className="o-menu__title">Why Choose Us</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/global-infrastructure/"><span className="o-menu__title">Global Infrastructure</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/cloud-simplified/"><span className="o-menu__title">Cloud Simplified</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/predictable-pricing/"><span className="o-menu__title">Predictable Pricing</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/support-experience/"><span className="o-menu__title">Support Experience</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/free-bundled-services/"><span className="o-menu__title">Free Bundled Services</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/series/craft-of-code/"><span className="o-menu__title">Customer Stories</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/linode-for-business/"><span className="o-menu__title">Cloud for Business</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/approach/"><span className="o-menu__title">Our Approach</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/what-is-cloud-computing/"><span className="o-menu__title">What is Cloud Computing?</span></a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="o-layout__module">
            <nav className="o-menu">
              <h4 className="o-menu__heading">Company</h4>
              <ul className="o-menu__list --d0">
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/company/about/"><span className="o-menu__title">About</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/partners/"><span className="o-menu__title">Partners</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/company/press/"><span className="o-menu__title">Press Center</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/company/careers/"><span className="o-menu__title">Careers</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/legal/"><span className="o-menu__title">Legal</span></a>
                </li>
              </ul>
            </nav>
          </div>

        </div>
        <div className="o-layout__col">

          <div className="o-layout__module">
            <nav className="o-menu">
              <h4 className="o-menu__heading">Products</h4>
              <ul className="o-menu__list --d0">
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/"><span className="o-menu__title">Products Overview</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/dedicated-cpu/"><span className="o-menu__title">Dedicated CPU</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/shared/"><span className="o-menu__title">Shared CPU</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/high-memory/"><span className="o-menu__title">High Memory</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/gpu/"><span className="o-menu__title">GPU</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/kubernetes/"><span className="o-menu__title">Kubernetes</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/block-storage/"><span className="o-menu__title">Block Storage</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/object-storage/"><span className="o-menu__title">Object Storage</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/backups/"><span className="o-menu__title">Backups</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/databases/"><span className="o-menu__title">Managed Databases</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/cloud-firewall/"><span className="o-menu__title">Cloud Firewall</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/ddos/"><span className="o-menu__title">DDoS Protection</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/dns-manager/"><span className="o-menu__title">DNS Manager</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/nodebalancers/"><span className="o-menu__title">NodeBalancers</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/vlan/"><span className="o-menu__title">VLAN</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/managed/"><span className="o-menu__title">Managed</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/pro-services/"><span className="o-menu__title">Professional Services</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/cloud-manager/"><span className="o-menu__title">Cloud Manager</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/linode-api/"><span className="o-menu__title">API</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/cli/"><span className="o-menu__title">CLI</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/linode-terraform-provider/"><span className="o-menu__title">Terraform Provider</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/linode-ansible-collection/"><span className="o-menu__title">Ansible Collection</span></a>
                </li>
              </ul>
            </nav>
          </div>

        </div>
        <div className="o-layout__col">

          <div className="o-layout__module">
            <nav className="o-menu">
              <h4 className="o-menu__heading">Industries</h4>
              <ul className="o-menu__list --d0">
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/digital-agencies-industry-solutions/"><span className="o-menu__title">Digital Agencies</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/education-industry-solutions/"><span className="o-menu__title">Education</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/managed-hosting-industry-solutions/"><span className="o-menu__title">Managed Hosting</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/video-streaming-solutions/"><span className="o-menu__title">Media</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/saas-industry-solutions/"><span className="o-menu__title">SaaS</span></a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="o-layout__module">
            <nav className="o-menu">
              <h4 className="o-menu__heading">Marketplace</h4>
              <ul className="o-menu__list --d0">
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/marketplace/apps/"><span className="o-menu__title">Browse Marketplace</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/marketplace/app-partners/"><span className="o-menu__title">Submit Marketplace App</span></a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="o-layout__module">
            <nav className="o-menu">
              <h4 className="o-menu__heading">Pricing</h4>
              <ul className="o-menu__list --d0">
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/pricing/"><span className="o-menu__title">Pricing List</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/estimator/"><span className="o-menu__title">Cloud Estimator</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/cloud-pricing-calculator/"><span className="o-menu__title">Cloud Pricing Calculator</span></a>
                </li>
              </ul>
            </nav>
          </div>

        </div>
        <div className="o-layout__col">

          <div className="o-layout__module">
            <nav className="o-menu">
              <h4 className="o-menu__heading">Community</h4>
              <ul className="o-menu__list --d0">
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/cloud-computing-community/"><span className="o-menu__title">Community Overview</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/community/questions/"><span className="o-menu__title">Q&amp;A</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/developers/"><span className="o-menu__title">Developer Portal</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/lp/affiliate-program/"><span className="o-menu__title">Affiliate Program</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/green-light/"><span className="o-menu__title">Beta Program</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/referral-program/"><span className="o-menu__title">Customer Referral Program</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/partners/"><span className="o-menu__title">Partner Program</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/linode-for-startups/"><span className="o-menu__title">Startup Program</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/blog/"><span className="o-menu__title">Blog</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/content/"><span className="o-menu__title">Content Resources</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/events/"><span className="o-menu__title">Events</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://linodestore.com/products"><span className="o-menu__title">Swag Store</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/promotions/"><span className="o-menu__title">Promotional Offers</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/distributions/"><span className="o-menu__title">Distributions</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/kernels/"><span className="o-menu__title">Kernels</span></a>
                </li>
              </ul>
            </nav>
          </div>

        </div>
        <div className="o-layout__col">

          <div className="o-layout__module">
            <nav className="o-menu">
              <h4 className="o-menu__heading">Contact</h4>
              <ul className="o-menu__list --d0">
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/support/"><span className="o-menu__title">Support</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://status.linode.com"><span className="o-menu__title">System Status</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://login.linode.com/login"><span className="o-menu__title">Log in</span></a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="o-layout__module c-social">
            <nav className="o-menu">
              <h4 className="o-menu__heading">Follow Us</h4>
              <ul className="o-menu__list">
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://twitter.com/linode">
                    <svg className="o-menu__icon" alt="Twitter Logo">
                      <use xlinkHref="#icon--twitter"></use>
                    </svg>
                    <span className="o-menu__title">Twitter</span>
                  </a>
                </li><li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.instagram.com/linode/">
                    <svg className="o-menu__icon" alt="Instagram Logo">
                      <use xlinkHref="#icon--instagram"></use>
                    </svg>
                    <span className="o-menu__title">Instagram</span>
                  </a>
                </li><li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.youtube.com/linode">
                    <svg className="o-menu__icon" alt="YouTube Logo">
                      <use xlinkHref="#icon--youtube"></use>
                    </svg>
                    <span className="o-menu__title">YouTube</span>
                  </a>
                </li><li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linkedin.com/company/linode/">
                    <svg className="o-menu__icon" alt="LinkedIn Logo">
                      <use xlinkHref="#icon--linkedin"></use>
                    </svg>
                    <span className="o-menu__title">LinkedIn</span>
                  </a>
                </li><li className="o-menu__item">
                  <a className="o-menu__link" href="https://github.com/linode/">
                    <svg className="o-menu__icon" alt="GitHub Logo">
                      <use xlinkHref="#icon--github"></use>
                    </svg>
                    <span className="o-menu__title">GitHub</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

        </div>
      </div>
    </div>

  </div>
</footer>
    );
  }
}

export default props => (
  <FooterNav />
);
