import React from "react";

const styles = {
  display: "none"
};

class Header extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "/assets/header.js";
    script.async = true;
    document.querySelector('.c-site-header').parentNode.appendChild(script);
    const script2 = document.createElement("script");
    script2.src = "/assets/banner-inline.js";
    script2.async = true;
    document.querySelector('.c-message').parentNode.appendChild(script2);
  }
  render() {
    return (
<header>
  <div className="c-site-header">

    <svg xmlns="http://www.w3.org/2000/svg" style={styles}>

      <symbol id="menu-icon--menu" viewBox="0 0 448 512"><path fill="currentColor" d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"></path></symbol>

      <symbol id="menu-icon--x" viewBox="0 0 320 512"><path fill="currentColor" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path></symbol>

      <symbol id="menu-icon--toggle" viewBox="0 0 320 512"><path fill="currentColor" d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z"></path></symbol>

      <symbol id="menu-icon--search" viewBox="0 0 30 30">
        <circle cx="17.5" cy="11.9" r="6.6" fill="#03b159" stroke="#fff" strokeWidth="2" strokeMiterlimit="10"/>
        <path d="M17.5 3.4C12.8 3.4 9 7.2 9 11.9c0 1.8.6 3.5 1.5 4.9-.2.1-.3.2-.5.4l-5.9 5.9c-.8.8-.8 2.2 0 3 .4.4 1 .6 1.5.6s1.1-.2 1.5-.6l5.9-5.9c.2-.2.4-.5.5-.7 1.2.6 2.5 1 3.9 1 4.7 0 8.5-3.8 8.5-8.5.1-4.8-3.7-8.6-8.4-8.6zm0 15.1c-3.6 0-6.6-3-6.6-6.6s3-6.6 6.6-6.6c3.6 0 6.6 3 6.6 6.6s-2.9 6.6-6.6 6.6z"/>
      </symbol>

      <symbol id="menu-icon--docs" viewBox="0 0 30 30">
        <path fill="#03b159" stroke="#fff" strokeWidth="2" strokeMiterlimit="10" d="M7.4 6.2h15.2v17.5H7.4z"/>
        <path d="M24.4 25.5H5.6v-21h18.8v21zm-17-1.8h15.2V6.2H7.4v17.5z"/>
        <path fill="#fff" d="M18.7 11.7h-7.4c-.4 0-.8-.4-.8-.9s.3-.9.8-.9h7.4c.4 0 .8.4.8.9s-.3.9-.8.9zM18.7 15.8h-7.4c-.4 0-.8-.4-.8-.9s.3-.9.8-.9h7.4c.4 0 .8.4.8.9s-.3.9-.8.9zM18.7 20h-7.4c-.4 0-.8-.4-.8-.9s.3-.9.8-.9h7.4c.4 0 .8.4.8.9s-.3.9-.8.9z"/>
      </symbol>

      <symbol id="menu-icon--blog" viewBox="0 0 30 30">
        <path fill="#fff" d="M7.3 5.9c-.7 0-1.3.6-1.3 1.3s.6 1.3 1.3 1.3c7.8 0 14.2 6.4 14.2 14.2 0 .7.6 1.3 1.3 1.3s1.3-.6 1.3-1.3c.1-9.2-7.5-16.8-16.8-16.8z"/>
        <circle cx="7.3" cy="22.8" r="2.2" fill="#fff" stroke="#000" strokeWidth="1.75" strokeMiterlimit="10"/>
        <path fill="#03b159" fillRule="evenodd" clipRule="evenodd" d="M7.3 6.8c-.2 0-.4.2-.4.4s.2.4.4.4c8.3 0 15 6.8 15 15.1 0 .2.2.5.5.5s.5-.2.5-.5c-.1-8.8-7.2-15.9-16-15.9z"/>
        <path d="M22.8 25.9c-1.7 0-3.1-1.4-3.1-3.1 0-6.9-5.6-12.5-12.5-12.5-1.7 0-3.1-1.4-3.1-3.1s1.4-3.1 3.1-3.1c10.3 0 18.6 8.4 18.7 18.7 0 1.7-1.4 3.1-3.1 3.1zM7.3 5.9c-.7 0-1.3.6-1.3 1.3s.6 1.3 1.3 1.3c7.8 0 14.2 6.4 14.2 14.2 0 .7.6 1.3 1.3 1.3s1.3-.6 1.3-1.3c.1-9.2-7.5-16.8-16.8-16.8z"/>
        <path d="M15 25.9c-1.7 0-3.1-1.4-3.1-3.1 0-2.6-2.1-4.7-4.7-4.7-1.7 0-3.1-1.4-3.1-3.1s1.4-3.1 3.1-3.1c6 0 10.9 4.9 10.9 10.9 0 1.7-1.3 3.1-3.1 3.1z"/>
        <path fill="#fff" d="M7.3 13.7c-.7 0-1.3.6-1.3 1.3s.6 1.3 1.3 1.3c3.5 0 6.4 2.9 6.4 6.4 0 .7.6 1.3 1.3 1.3s1.3-.6 1.3-1.3c.1-4.9-4-9-9-9z"/>
        <path fill="#03b159" fillRule="evenodd" clipRule="evenodd" d="M15.5 22.8c0-4.5-3.7-8.2-8.2-8.2-.2 0-.4.2-.4.5s.2.5.4.5c4.1 0 7.4 3.3 7.4 7.3 0 .2.2.5.5.5.1-.2.3-.4.3-.6z"/>
      </symbol>

      <symbol id="menu-icon--resources" viewBox="0 0 30 30">
        <path fill="#03b159" stroke="#fff" strokeWidth="1.75" strokeMiterlimit="10" d="m15 15.4 5.4 5.3v-14H9.7v14z"/>
        <path d="M22.1 25 15 17.9 7.9 25V5h14.2v20zM15 15.4l5.3 5.3V6.6H9.7v14.1l5.3-5.3z"/>
      </symbol>

      <symbol id="menu-icon--pricing" viewBox="0 0 30 30">
        <path fill="#03b159" stroke="#fff" strokeWidth="2" strokeMiterlimit="10" d="M21.2 24.2H8.9V12.6L15 9.1l6.2 3.5z"/>
        <path d="M15.9 7.6V4.1h-1.8v3.5l-7 4V26h15.8V11.6l-7-4zm5.3 16.6H8.9V12.6L15 9.1l6.1 3.5.1 11.6z"/>
        <path d="M17.5 18.5c0-1.1-.6-1.7-2.1-2.1-1.1-.3-1.3-.5-1.3-1 0-.3.2-.7.8-.7.8 0 .9.5 1 .7h1.4c-.1-.8-.5-1.6-1.8-1.8V13h-1.2v.7c-1 .2-1.7.8-1.7 1.9 0 1 .5 1.6 2.2 2.1.9.3 1.2.5 1.2 1 0 .4-.2.8-1 .8-.6 0-1-.3-1.1-.9h-1.4c.1 1 .8 1.7 1.9 1.9v.8h1.2v-.8c1.2-.2 1.9-.9 1.9-2z" fill="#fff"/>
      </symbol>

      <symbol id="menu-icon--partners" viewBox="0 0 30 30">
        <path d="M19.5 24h4.6v-3.7h-.4c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8h.4V9.9h-5.8V8.1c0-1.1-.9-2-2-2s-2 .9-2 2v1.8H10v4.2H7.2c-.8 0-1.4.6-1.4 1.4 0 .8.6 1.4 1.4 1.4H10v7.2h2v-.5c0-2.1 1.7-3.8 3.8-3.8s3.8 1.7 3.8 3.8v.4h-.1z" fill="#03b159" stroke="#fff" strokeWidth="2" strokeMiterlimit="10"/>
        <path d="M25.8 25.8h-8.1v-2.2c0-1.1-.9-2-2-2s-2 .9-2 2v2.2H8.2v-7.2h-1c-1.7 0-3.1-1.4-3.1-3.1s1.4-3.1 3.1-3.1h1V8.2h4.3v-.1c0-2.1 1.7-3.8 3.8-3.8s3.8 1.7 3.8 3.8v.1h5.8v6.4h-2.1c-1.1 0-2 .9-2 2s.9 2 2 2h2.1v7.2h-.1zM19.5 24h4.6v-3.7h-.4c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8h.4V9.9h-5.8V8.1c0-1.1-.9-2-2-2s-2 .9-2 2v1.8H10v4.2H7.2c-.8 0-1.4.6-1.4 1.4 0 .8.6 1.4 1.4 1.4H10v7.2h2v-.5c0-2.1 1.7-3.8 3.8-3.8s3.8 1.7 3.8 3.8v.4h-.1z"/>
      </symbol>

      <symbol id="menu-icon--support" viewBox="0 0 30 30">
        <path d="M15 5.9c-4.6 0-8.4 3.7-8.4 8.4 0 2.1.8 4.1 2.2 5.6l.2.3v.3l-.2 2.3 2.5-1.1.3.1c1.1.5 2.2.7 3.4.7 4.6 0 8.4-3.7 8.4-8.4S19.6 5.9 15 5.9z" fill="#03b159" stroke="#fff" strokeWidth="2" strokeMiterlimit="10"/>
        <path d="m6.9 25.8.4-4.9c-1.6-1.8-2.4-4.1-2.4-6.5C4.9 8.8 9.4 4.2 15 4.2s10.1 4.5 10.1 10.1S20.6 24.5 15 24.5c-1.3 0-2.6-.2-3.8-.7l-4.3 2zM15 5.9c-4.6 0-8.4 3.7-8.4 8.4 0 2.1.8 4.1 2.2 5.6l.2.3v.3l-.2 2.3 2.5-1.1.3.1c1.1.5 2.2.7 3.4.7 4.6 0 8.4-3.7 8.4-8.4S19.6 5.9 15 5.9z"/>
        <g>
          <path d="M13.9 16.1v-.2c0-.9.4-1.6 1.3-2.4.6-.5.7-.9.7-1.4 0-.5-.3-.9-.9-.9-.8 0-1 .5-1.1 1.2H12c.1-1.1.8-2.7 3-2.6 2.2 0 2.8 1.4 2.8 2.5 0 .8-.3 1.4-1.2 2.3-.6.5-.8 1-.8 1.5v.1h-1.9zm0 2.9v-2.2h2V19h-2z" fill="#fff"/>
        </g>
      </symbol>

      <symbol id="menu-icon--sales" viewBox="0 0 30 30">
        <path fill="none" stroke="currentColor" strokeWidth="1.75" strokeMiterlimit="10" d="M24.5 24h-19V6"/>
        <path d="M9 20.7h-.2c-.3-.1-.5-.5-.3-.8l3-7c.1-.2.2-.3.4-.4.2 0 .4 0 .5.1l4.3 3.5 3.7-9.2c.1-.3.5-.5.8-.3.3.1.5.5.4.8l-4 10c-.1.2-.2.3-.4.4-.2.1-.4 0-.6-.1l-4.4-3.5-2.7 6.2c0 .2-.3.3-.5.3z" fill="#fff" stroke="currentColor" strokeWidth="2.5" strokeMiterlimit="10"/>
        <path d="M9 20.7h-.2c-.3-.1-.5-.5-.3-.8l3-7c.1-.2.2-.3.4-.4.2 0 .4 0 .5.1l4.3 3.5 3.7-9.2c.1-.3.5-.5.8-.3.3.1.5.5.4.8l-4 10c-.1.2-.2.3-.4.4-.2.1-.4 0-.6-.1l-4.4-3.5-2.7 6.2c0 .2-.3.3-.5.3z" fill="#03b159"/>
        <path d="M9 21c-.1 0-.2 0-.3-.1-.4-.2-.7-.7-.5-1.2l3-7c.1-.2.3-.4.6-.5.3-.1.5 0 .8.2l4.1 3.3 3.6-8.9c.2-.4.7-.7 1.1-.5.4.2.6.7.4 1.1l-4 10c-.1.3-.3.5-.6.5-.3.1-.5 0-.8-.2l-4.1-3.3-2.5 5.9c-.1.5-.5.7-.8.7zm3-8.3s-.1 0 0 0c-.2 0-.3.1-.3.2l-3 7c-.1.2 0 .4.2.5.2.1.4 0 .5-.2l2.8-6.5 4.6 3.7c.1.1.2.1.3.1.1 0 .2-.1.3-.2l4-10c.1-.2 0-.4-.2-.5-.2-.1-.4 0-.5.2l-3.8 9.5-4.6-3.7c-.1 0-.2-.1-.3-.1z" fill="#fff"/>
      </symbol>

    </svg>


    <div className="o-layout__row c-site-header__banner c-message" id="x-banner-2023-23-13" style={{display:'none'}}>
      <div className="c-message__body">
        <div className="c-notification">
          <a href="#" className="c-notification__link" target="_self">
            <span className="c-notification__tag"></span>
            <span className="c-notification__message"></span>
          </a>
        </div>
      </div>
      <button className="c-message__x">
        <svg viewBox="0 0 320 512"><path fill="currentcolor" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34.0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58.0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58.0L4.68 125.7c-6.23 6.23-6.23 16.34.0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34.0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58.0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58.0l25.03-25.03c6.23-6.23 6.23-16.34.0-22.58L207.6 256z"/></svg>
      </button>
    </div>
    <div className="o-layout__row c-site-header__topbar">
      <div className="o-layout__colset">
        <div className="o-layout__col">


        </div>
        <div className="o-layout__col">

          <div className="o-layout__module c-utility-nav">
            <nav className="o-menu o-menu--h">
              <ul className="o-menu__list --d0">
                <li className="o-menu__item o-menu__item--search">
                  <a className="o-menu__link" href="https://www.linode.com/search/"><span className="o-menu__title">Search</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/partners/"><span className="o-menu__title">Partners</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/docs/"><span className="o-menu__title">Docs</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/support/"><span className="o-menu__title">Support</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/company/contact/"><span className="o-menu__title">Sales</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/company/careers/"><span className="o-menu__title">Careers</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://login.linode.com/login"><span className="o-menu__title">Log In</span></a>
                </li>
              </ul>
            </nav>
          </div>

        </div>
        <div className="o-layout__col">

          <div className="o-layout__module c-weglot-nav">
            <div id="weglot_here"></div>
          </div>

        </div>
      </div>
    </div>


    <div className="o-layout__row c-site-header__primary">
      <div className="o-layout__colset">
        <div className="o-layout__col">

          <div className="o-layout__module c-identity">
            <a className="c-identity__link" href="https://www.linode.com" target="_self" itemProp="url">
              <img width="160" height="55" alt="Logo" className="c-identity__image" src="https://www.linode.com/wp-content/themes/linode-website-theme/images/logo.svg?ver=1675714738" itemProp="image" data-no-lazy="1" />
            </a>
          </div>

        </div>
        <div className="o-layout__col">

          <div className="o-layout__module c-main-menu">
            <nav className="o-menu o-menu--h">
              <ul className="o-menu__list --d0">
                <li className="o-menu__item">
                  <button className="o-menu__link o-menu__toggle"data-toggle="#sub-menu--why-linode" data-group="sub-menu"><span className="o-menu__title">Why Choose Us</span></button>
                </li>
                <li className="o-menu__item">
                  <button className="o-menu__link o-menu__toggle"data-toggle="#sub-menu--products" data-group="sub-menu"><span className="o-menu__title">Products</span></button>
                </li>
                <li className="o-menu__item">
                  <button className="o-menu__link o-menu__toggle"data-toggle="#sub-menu--solutions" data-group="sub-menu"><span className="o-menu__title">Solutions</span></button>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/marketplace/"><span className="o-menu__title">Marketplace</span></a>
                </li>
                <li className="o-menu__item">
                  <button className="o-menu__link o-menu__toggle"data-toggle="#sub-menu--pricing" data-group="sub-menu"><span className="o-menu__title">Pricing</span></button>
                </li>
                <li className="o-menu__item">
                  <button className="o-menu__link o-menu__toggle"data-toggle="#sub-menu--community" data-group="sub-menu"><span className="o-menu__title">Community</span></button>
                </li>
                <li className="o-menu__item o-menu__item--button">
                  <a className="o-menu__link" href="https://login.linode.com/signup"><span className="o-menu__title">Sign Up</span></a>
                </li>
                <li className="o-menu__item o-menu__item--mobile">
                  <button className="o-menu__link o-menu__toggle"data-toggle="#sub-menu--mobile" data-group="sub-menu"><span className="o-menu__title">Mobile</span></button>
                </li>
              </ul>
            </nav>
          </div>

        </div>
      </div>
    </div>


    <div className="c-submenu c-submenu--mobile" data-toggle data-group="sub-menu" id="sub-menu--mobile">

      <div className="o-layout__module" id="submenu-mobile-primary">
        <nav className="o-menu">
          <ul className="o-menu__list --d0">
            <li className="o-menu__item o-menu__parent" id="submenu-mobile-primary-full--46170" data-group="submenu-mobile-primary-full">
              <button className="o-menu__link o-menu__toggle"data-group="submenu-mobile-primary-full" data-toggle="#submenu-mobile-primary-full--46170"><span className="o-menu__title">Why Choose Us</span></button>
              <ul className="o-menu__list o-menu__child --d1">
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
                  <a className="o-menu__link" href="https://www.linode.com/compare/"><span className="o-menu__title">Cloud Comparisons</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/approach/"><span className="o-menu__title">Our Approach</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/what-is-cloud-computing/"><span className="o-menu__title">What is Cloud Computing?</span></a>
                </li>
              </ul>
            </li>
            <li className="o-menu__item o-menu__parent" id="submenu-mobile-primary-full--46171" data-group="submenu-mobile-primary-full">
              <button className="o-menu__link o-menu__toggle"data-group="submenu-mobile-primary-full" data-toggle="#submenu-mobile-primary-full--46171"><span className="o-menu__title">Products</span></button>
              <ul className="o-menu__list o-menu__child --d1">
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/"><span className="o-menu__title">Products Overview</span></a>
                </li>
                <li className="o-menu__item o-menu__parent" id="submenu-mobile-primary-full--46172" data-group="submenu-mobile-primary-full--level-1">
                  <button className="o-menu__link o-menu__toggle"data-group="submenu-mobile-primary-full--level-1" data-toggle="#submenu-mobile-primary-full--46172"><span className="o-menu__title">Compute</span></button>
                  <ul className="o-menu__list o-menu__child --d2">
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
                      <a className="o-menu__link" href="https://www.linode.com/products/akamai-products-and-solutions/#edgeworkers"><span className="o-menu__title">EdgeWorkers</span></a>
                    </li>
                  </ul>
                </li>
                <li className="o-menu__item o-menu__parent" id="submenu-mobile-primary-full--46173" data-group="submenu-mobile-primary-full--level-1">
                  <button className="o-menu__link o-menu__toggle"data-group="submenu-mobile-primary-full--level-1" data-toggle="#submenu-mobile-primary-full--46173"><span className="o-menu__title">Storage</span></button>
                  <ul className="o-menu__list o-menu__child --d2">
                    <li className="o-menu__item">
                      <a className="o-menu__link" href="https://www.linode.com/products/block-storage/"><span className="o-menu__title">Block Storage</span></a>
                    </li>
                    <li className="o-menu__item">
                      <a className="o-menu__link" href="https://www.linode.com/products/object-storage/"><span className="o-menu__title">Object Storage</span></a>
                    </li>
                    <li className="o-menu__item">
                      <a className="o-menu__link" href="https://www.linode.com/products/backups/"><span className="o-menu__title">Backups</span></a>
                    </li>
                  </ul>
                </li>
                <li className="o-menu__item o-menu__parent" id="submenu-mobile-primary-full--46174" data-group="submenu-mobile-primary-full--level-1">
                  <button className="o-menu__link o-menu__toggle"data-group="submenu-mobile-primary-full--level-1" data-toggle="#submenu-mobile-primary-full--46174"><span className="o-menu__title">Databases</span></button>
                  <ul className="o-menu__list o-menu__child --d2">
                    <li className="o-menu__item">
                      <a className="o-menu__link" href="https://www.linode.com/products/databases/"><span className="o-menu__title">Managed Databases</span></a>
                    </li>
                    <li className="o-menu__item">
                      <a className="o-menu__link" href="https://www.linode.com/products/mysql/"><span className="o-menu__title">MySQL</span></a>
                    </li>
                    <li className="o-menu__item">
                      <a className="o-menu__link" href="https://www.linode.com/products/postgresql/"><span className="o-menu__title">PostgreSQL</span></a>
                    </li>
                  </ul>
                </li>
                <li className="o-menu__item o-menu__parent" id="submenu-mobile-primary-full--46175" data-group="submenu-mobile-primary-full--level-1">
                  <button className="o-menu__link o-menu__toggle"data-group="submenu-mobile-primary-full--level-1" data-toggle="#submenu-mobile-primary-full--46175"><span className="o-menu__title">Services</span></button>
                  <ul className="o-menu__list o-menu__child --d2">
                    <li className="o-menu__item">
                      <a className="o-menu__link" href="https://www.linode.com/products/managed/"><span className="o-menu__title">Managed</span></a>
                    </li>
                    <li className="o-menu__item">
                      <a className="o-menu__link" href="https://www.linode.com/products/pro-services/"><span className="o-menu__title">Professional Services</span></a>
                    </li>
                  </ul>
                </li>
                <li className="o-menu__item o-menu__parent" id="submenu-mobile-primary-full--46176" data-group="submenu-mobile-primary-full--level-1">
                  <button className="o-menu__link o-menu__toggle"data-group="submenu-mobile-primary-full--level-1" data-toggle="#submenu-mobile-primary-full--46176"><span className="o-menu__title">Networking</span></button>
                  <ul className="o-menu__list o-menu__child --d2">
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
                  </ul>
                </li>
                <li className="o-menu__item o-menu__parent" id="submenu-mobile-primary-full--46177" data-group="submenu-mobile-primary-full--level-1">
                  <button className="o-menu__link o-menu__toggle"data-group="submenu-mobile-primary-full--level-1" data-toggle="#submenu-mobile-primary-full--46177"><span className="o-menu__title">Developer Tools</span></button>
                  <ul className="o-menu__list o-menu__child --d2">
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
                    <li className="o-menu__item">
                      <a className="o-menu__link" href="https://www.linode.com/products/images/"><span className="o-menu__title">Images</span></a>
                    </li>
                    <li className="o-menu__item">
                      <a className="o-menu__link" href="https://www.linode.com/products/integrations/"><span className="o-menu__title">Integrations</span></a>
                    </li>
                    <li className="o-menu__item">
                      <a className="o-menu__link" href="https://www.linode.com/products/stackscripts/"><span className="o-menu__title">StackScripts</span></a>
                    </li>
                    <li className="o-menu__item">
                      <a className="o-menu__link" href="https://www.linode.com/products/monitoring/"><span className="o-menu__title">Monitoring</span></a>
                    </li>
                    <li className="o-menu__item">
                      <a className="o-menu__link" href="https://www.linode.com/products/users-permissions/"><span className="o-menu__title">Users &#038; Permissions</span></a>
                    </li>
                  </ul>
                </li>
                <li className="o-menu__item o-menu__parent" id="submenu-mobile-primary-full--52611" data-group="submenu-mobile-primary-full--level-1">
                  <button className="o-menu__link o-menu__toggle"data-group="submenu-mobile-primary-full--level-1" data-toggle="#submenu-mobile-primary-full--52611"><span className="o-menu__title">Delivery</span></button>
                  <ul className="o-menu__list o-menu__child --d2">
                    <li className="o-menu__item">
                      <a className="o-menu__link" href="https://www.linode.com/products/akamai-products-and-solutions/#adaptive-media-delivery"><span className="o-menu__title">Adaptive Media</span></a>
                    </li>
                    <li className="o-menu__item">
                      <a className="o-menu__link" href="https://www.linode.com/products/akamai-products-and-solutions/#download-delivery"><span className="o-menu__title">Download Delivery</span></a>
                    </li>
                    <li className="o-menu__item">
                      <a className="o-menu__link" href="https://www.linode.com/products/akamai-products-and-solutions/#ion"><span className="o-menu__title">Ion</span></a>
                    </li>
                    <li className="o-menu__item">
                      <a className="o-menu__link" href="https://www.linode.com/products/akamai-products-and-solutions/#global-traffic-management"><span className="o-menu__title">Global Traffic</span></a>
                    </li>
                  </ul>
                </li>
                <li className="o-menu__item o-menu__parent" id="submenu-mobile-primary-full--52612" data-group="submenu-mobile-primary-full--level-1">
                  <button className="o-menu__link o-menu__toggle"data-group="submenu-mobile-primary-full--level-1" data-toggle="#submenu-mobile-primary-full--52612"><span className="o-menu__title">Security</span></button>
                  <ul className="o-menu__list o-menu__child --d2">
                    <li className="o-menu__item">
                      <a className="o-menu__link" href="https://www.linode.com/products/akamai-products-and-solutions/#guardicore-segmentation"><span className="o-menu__title">Guardicore</span></a>
                    </li>
                    <li className="o-menu__item">
                      <a className="o-menu__link" href="https://www.linode.com/products/akamai-products-and-solutions/#kona-site-defender"><span className="o-menu__title">Kona Site Defender</span></a>
                    </li>
                    <li className="o-menu__item">
                      <a className="o-menu__link" href="https://www.linode.com/products/akamai-products-and-solutions/#app-api-protector"><span className="o-menu__title">App &amp; API Protector</span></a>
                    </li>
                    <li className="o-menu__item">
                      <a className="o-menu__link" href="https://www.linode.com/products/akamai-products-and-solutions/#bot-manager"><span className="o-menu__title">Bot Manager</span></a>
                    </li>
                    <li className="o-menu__item">
                      <a className="o-menu__link" href="https://www.linode.com/products/akamai-products-and-solutions/#account-protector"><span className="o-menu__title">Account Protector</span></a>
                    </li>
                    <li className="o-menu__item">
                      <a className="o-menu__link" href="https://www.linode.com/products/akamai-products-and-solutions/#enterprise-application-access"><span className="o-menu__title">EAA</span></a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="o-menu__item o-menu__parent" id="submenu-mobile-primary-full--46178" data-group="submenu-mobile-primary-full">
              <button className="o-menu__link o-menu__toggle"data-group="submenu-mobile-primary-full" data-toggle="#submenu-mobile-primary-full--46178"><span className="o-menu__title">Solutions</span></button>
              <ul className="o-menu__list o-menu__child --d1">
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/solutions/"><span className="o-menu__title">Solutions Overview</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/linode-for-digital-agencies/"><span className="o-menu__title">Digital Agencies</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/elearning-solutions/"><span className="o-menu__title">eLearning</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/linode-for-higher-education/"><span className="o-menu__title">Higher Education</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/machine-learning-solutions/"><span className="o-menu__title">Machine Learning</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/mgd-hosting-solutions/"><span className="o-menu__title">Managed Hosting</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/multicloud/"><span className="o-menu__title">Multicloud</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/linode-for-saas/"><span className="o-menu__title">SaaS</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/security-solutions/"><span className="o-menu__title">Security Solutions</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/video-streaming-solutions/"><span className="o-menu__title">Video Streaming</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/linode-for-website-hosting/"><span className="o-menu__title">Website Hosting</span></a>
                </li>
              </ul>
            </li>
            <li className="o-menu__item o-menu__parent" id="submenu-mobile-primary-full--46237" data-group="submenu-mobile-primary-full">
              <button className="o-menu__link o-menu__toggle"data-group="submenu-mobile-primary-full" data-toggle="#submenu-mobile-primary-full--46237"><span className="o-menu__title">Marketplace</span></button>
              <ul className="o-menu__list o-menu__child --d1">
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/marketplace/"><span className="o-menu__title">Browse Marketplace</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/marketplace/app-partners/"><span className="o-menu__title">Submit Marketplace App</span></a>
                </li>
              </ul>
            </li>
            <li className="o-menu__item o-menu__parent" id="submenu-mobile-primary-full--46179" data-group="submenu-mobile-primary-full">
              <button className="o-menu__link o-menu__toggle"data-group="submenu-mobile-primary-full" data-toggle="#submenu-mobile-primary-full--46179"><span className="o-menu__title">Pricing</span></button>
              <ul className="o-menu__list o-menu__child --d1">
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/pricing/"><span className="o-menu__title">Pricing List</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/estimator/"><span className="o-menu__title">Cloud Estimator</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://cloud-estimator.linode.com"><span className="o-menu__title">Cloud Pricing Calculator</span></a>
                </li>
              </ul>
            </li>
            <li className="o-menu__item o-menu__parent" id="submenu-mobile-primary-full--46180" data-group="submenu-mobile-primary-full">
              <button className="o-menu__link o-menu__toggle"data-group="submenu-mobile-primary-full" data-toggle="#submenu-mobile-primary-full--46180"><span className="o-menu__title">Community</span></button>
              <ul className="o-menu__list o-menu__child --d1">
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
                  <a className="o-menu__link" href="https://www.linode.com/blog/"><span className="o-menu__title">Blog</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/events/"><span className="o-menu__title">Events</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/newsletter/"><span className="o-menu__title">Newsletter</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/content/"><span className="o-menu__title">Content Resources</span></a>
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
                  <a className="o-menu__link" href="https://www.linode.com/linode-for-startups/"><span className="o-menu__title">Startups Solutions</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://linodestore.com/products"><span className="o-menu__title">Swag Store</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/docs/"><span className="o-menu__title">Documentation</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/distributions/"><span className="o-menu__title">Distributions</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/cloud-computing-terms/"><span className="o-menu__title">Cloud Computing Terms</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/promotions/"><span className="o-menu__title">Promotional Offers</span></a>
                </li>
              </ul>
            </li>
            <li className="o-menu__item o-menu__parent" id="submenu-mobile-primary-full--46181" data-group="submenu-mobile-primary-full">
              <button className="o-menu__link o-menu__toggle"data-group="submenu-mobile-primary-full" data-toggle="#submenu-mobile-primary-full--46181"><span className="o-menu__title">Company</span></button>
              <ul className="o-menu__list o-menu__child --d1">
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/company/about/"><span className="o-menu__title">About Us</span></a>
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
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/company/contact/"><span className="o-menu__title">Sales</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://status.linode.com"><span className="o-menu__title">System Status</span></a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      <div className="o-layout__module" id="submenu-mobile-quicklinks">
        <nav className="o-menu o-menu--h">
          <ul className="o-menu__list --d0">
            <li className="o-menu__item">
              <button className="o-menu__link o-menu__toggle"data-toggle="#submenu-mobile-search" data-group="mobile-search"><svg className="o-menu__icon" alt="Search Icon"><use xlinkHref="#menu-icon--search"></use></svg><span className="o-menu__title">Search</span></button>
            </li>
            <li className="o-menu__item">
              <a className="o-menu__link" href="https://www.linode.com/docs/"><svg className="o-menu__icon" alt="Docs Icon"><use xlinkHref="#menu-icon--docs"></use></svg><span className="o-menu__title">Docs</span></a>
            </li>
            <li className="o-menu__item">
              <a className="o-menu__link" href="https://www.linode.com/blog/"><svg className="o-menu__icon" alt="Blog Icon"><use xlinkHref="#menu-icon--blog"></use></svg><span className="o-menu__title">Blog</span></a>
            </li>
            <li className="o-menu__item">
              <a className="o-menu__link" href="https://www.linode.com/content/"><svg className="o-menu__icon" alt="Resources Icon"><use xlinkHref="#menu-icon--resources"></use></svg><span className="o-menu__title">Resources</span></a>
            </li>
            <li className="o-menu__item">
              <a className="o-menu__link" href="https://www.linode.com/pricing/"><svg className="o-menu__icon" alt="Pricing Icon"><use xlinkHref="#menu-icon--pricing"></use></svg><span className="o-menu__title">Pricing</span></a>
            </li>
            <li className="o-menu__item">
              <a className="o-menu__link" href="https://www.linode.com/partners/"><svg className="o-menu__icon" alt="Partners Icon"><use xlinkHref="#menu-icon--partners"></use></svg><span className="o-menu__title">Partners</span></a>
            </li>
            <li className="o-menu__item">
              <a className="o-menu__link" href="https://www.linode.com/support/"><svg className="o-menu__icon" alt="Support Icon"><use xlinkHref="#menu-icon--support"></use></svg><span className="o-menu__title">Support</span></a>
            </li>
            <li className="o-menu__item">
              <a className="o-menu__link" href="https://www.linode.com/company/contact/"><svg className="o-menu__icon" alt="Sales Icon"><use xlinkHref="#menu-icon--sales"></use></svg><span className="o-menu__title">Sales</span></a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="o-layout__module" id="submenu-mobile-search" data-group="mobile-search">
        <form role="search" method="get" action="https://www.linode.com" className="c-search">
          <label htmlFor="s">Search</label>
          <input type="search" placeholder="Search Linode" name="s" />
          <input type="submit" value="Search" />
        </form>
      </div>

      <div className="o-layout__module" id="submenu-mobile-signup">
        <nav className="o-menu">
          <ul className="o-menu__list --d0">
            <li className="o-menu__item o-menu__item--button">
              <a className="o-menu__link" href="https://login.linode.com/login"><span className="o-menu__title">Log In</span></a>
            </li>
            <li className="o-menu__item o-menu__item--button">
              <a className="o-menu__link" href="https://login.linode.com/signup"><span className="o-menu__title">Sign Up</span></a>
            </li>
          </ul>
        </nav>
      </div>

    </div>


    <div className="o-layout__row c-submenu c-submenu--3col c-submenu--why-linode" data-toggle data-group="sub-menu" id="sub-menu--why-linode">
      <div className="o-layout__colset">
        <div className="o-layout__col">

          <div className="o-layout__module">
            <div data-featured="why_linode"></div>
          </div>

        </div>
        <div className="o-layout__col">

          <div className="o-layout__module">
            <nav className="o-menu">
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
              </ul>
            </nav>
          </div>

        </div>
        <div className="o-layout__col">

          <div className="o-layout__module">
            <nav className="o-menu">
              <ul className="o-menu__list --d0">
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/company/about/"><span className="o-menu__title">About Us</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/series/craft-of-code/"><span className="o-menu__title">Customer Stories</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/linode-for-business/"><span className="o-menu__title">Cloud for Business</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/compare/"><span className="o-menu__title">Cloud Comparisons</span></a>
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

        </div>
      </div>
    </div>


    <div className="o-layout__row c-submenu c-submenu--4col c-submenu--products" data-toggle data-group="sub-menu" id="sub-menu--products">
      <div className="o-layout__colset">
        <div className="o-layout__col">

          <div className="o-layout__module">
            <div data-featured="products"></div>
          </div>

          <div className="o-layout__module c-submenu__view_all">
            <a href="/products/" className="o-link--arrow">View All Products</a>
          </div>

        </div>
        <div className="o-layout__col">

          <div className="o-layout__module">
            <h6>Compute</h6>
            <nav className="o-menu">
              <ul className="o-menu__list --d0">
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
                  <a className="o-menu__link" href="https://www.linode.com/products/akamai-products-and-solutions/#edgeworkers"><span className="o-menu__title">EdgeWorkers</span></a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="o-layout__module">
            <h6>Storage</h6>
            <nav className="o-menu">
              <ul className="o-menu__list --d0">
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/block-storage/"><span className="o-menu__title">Block Storage</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/object-storage/"><span className="o-menu__title">Object Storage</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/backups/"><span className="o-menu__title">Backups</span></a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="o-layout__module">
            <h6>Databases</h6>
            <nav className="o-menu">
              <ul className="o-menu__list --d0">
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/databases/"><span className="o-menu__title">Managed Databases</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/mysql/"><span className="o-menu__title">MySQL</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/postgresql/"><span className="o-menu__title">PostgreSQL</span></a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="o-layout__module">
            <h6>Services</h6>
            <nav className="o-menu">
              <ul className="o-menu__list --d0">
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/managed/"><span className="o-menu__title">Managed</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/pro-services/"><span className="o-menu__title">Professional Services</span></a>
                </li>
              </ul>
            </nav>
          </div>

        </div>
        <div className="o-layout__col">

          <div className="o-layout__module">
            <h6>Networking</h6>
            <nav className="o-menu">
              <ul className="o-menu__list --d0">
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
              </ul>
            </nav>
          </div>

          <div className="o-layout__module">
            <h6>Developer Tools</h6>
            <nav className="o-menu">
              <ul className="o-menu__list --d0">
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
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/images/"><span className="o-menu__title">Images</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/integrations/"><span className="o-menu__title">Integrations</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/stackscripts/"><span className="o-menu__title">StackScripts</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/monitoring/"><span className="o-menu__title">Monitoring</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/users-permissions/"><span className="o-menu__title">Users &#038; Permissions</span></a>
                </li>
              </ul>
            </nav>
          </div>

        </div>
        <div className="o-layout__col">

          <div className="o-layout__module">
            <h6>Delivery</h6>
            <nav className="o-menu">
              <ul className="o-menu__list --d0">
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/akamai-products-and-solutions/#adaptive-media-delivery"><span className="o-menu__title">Adaptive Media</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/akamai-products-and-solutions/#download-delivery"><span className="o-menu__title">Download Delivery</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/akamai-products-and-solutions/#ion"><span className="o-menu__title">Ion</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/akamai-products-and-solutions/#global-traffic-management"><span className="o-menu__title">Global Traffic</span></a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="o-layout__module">
            <h6>Security</h6>
            <nav className="o-menu">
              <ul className="o-menu__list --d0">
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/akamai-products-and-solutions/#guardicore-segmentation"><span className="o-menu__title">Guardicore</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/akamai-products-and-solutions/#kona-site-defender"><span className="o-menu__title">Kona Site Defender</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/akamai-products-and-solutions/#app-api-protector"><span className="o-menu__title">App &amp; API Protector</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/akamai-products-and-solutions/#bot-manager"><span className="o-menu__title">Bot Manager</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/akamai-products-and-solutions/#account-protector"><span className="o-menu__title">Account Protector</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/products/akamai-products-and-solutions/#enterprise-application-access"><span className="o-menu__title">EAA</span></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

      </div>
    </div>


    <div className="o-layout__row c-submenu c-submenu--2col c-submenu--solutions" data-toggle data-group="sub-menu" id="sub-menu--solutions">
      <div className="o-layout__colset">
        <div className="o-layout__col">

          <div className="o-layout__module">
            <div data-featured="solutions"></div>
          </div>

          <div className="o-layout__module c-submenu__view_all">
            <a href="/solutions/" className="o-link--arrow">View All Solutions</a>
          </div>

        </div>
        <div className="o-layout__col">

          <div className="o-layout__module">
            <h6>Solutions</h6>
            <nav className="o-menu">
              <ul className="o-menu__list --d0">
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/linode-for-digital-agencies/"><span className="o-menu__title">Digital Agencies</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/elearning-solutions/"><span className="o-menu__title">eLearning</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/linode-for-higher-education/"><span className="o-menu__title">Higher Education</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/machine-learning-solutions/"><span className="o-menu__title">Machine Learning</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/mgd-hosting-solutions/"><span className="o-menu__title">Managed Hosting</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/multicloud/"><span className="o-menu__title">Multicloud</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/linode-for-saas/"><span className="o-menu__title">SaaS</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/security-solutions/"><span className="o-menu__title">Security Solutions</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/video-streaming-solutions/"><span className="o-menu__title">Video Streaming</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/linode-for-website-hosting/"><span className="o-menu__title">Website Hosting</span></a>
                </li>
              </ul>
            </nav>
          </div>

        </div>
      </div>
    </div>


    <div className="o-layout__row c-submenu c-submenu--2col c-submenu--pricing" data-toggle data-group="sub-menu" id="sub-menu--pricing">
      <div className="o-layout__colset">
        <div className="o-layout__col">

          <div className="o-layout__module">
            <div data-featured="pricing"></div>
          </div>

        </div>
        <div className="o-layout__col">

          <div className="o-layout__module">
            <h6>Pricing</h6>
            <nav className="o-menu">
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
      </div>
    </div>


    <div className="o-layout__row c-submenu c-submenu--3col c-submenu--community" data-toggle data-group="sub-menu" id="sub-menu--community">
      <div className="o-layout__colset">
        <div className="o-layout__col">

          <div className="o-layout__module">
            <div data-featured="community"></div>
          </div>

        </div>
        <div className="o-layout__col">

          <div className="o-layout__module">
            <h6>Community</h6>
            <nav className="o-menu">
              <ul className="o-menu__list --d0">
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/cloud-computing-community/"><span className="o-menu__title">Overview</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/community/questions/"><span className="o-menu__title">Q&amp;A</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/developers/"><span className="o-menu__title">Developer Portal</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/blog/"><span className="o-menu__title">Blog</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/green-light/"><span className="o-menu__title">Beta Program</span></a>
                </li>
              </ul>
            </nav>
          </div>

        </div>
        <div className="o-layout__col">

          <div className="o-layout__module">
            <h6>Engage With Us</h6>
            <nav className="o-menu">
              <ul className="o-menu__list --d0">
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/content/"><span className="o-menu__title">Content Resources</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/events/"><span className="o-menu__title">Events</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/newsletter/"><span className="o-menu__title">Newsletter</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/company/press/"><span className="o-menu__title">Press Center</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/lp/affiliate-program/"><span className="o-menu__title">Affiliate Program</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/referral-program/"><span className="o-menu__title">Customer Referral Program</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/linode-for-startups/"><span className="o-menu__title">Startup Program</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://linodestore.com/products"><span className="o-menu__title">Swag Store</span></a>
                </li>
                <li className="o-menu__item">
                  <a className="o-menu__link" href="https://www.linode.com/promotions/"><span className="o-menu__title">Promotional Offers</span></a>
                </li>
              </ul>
            </nav>
          </div>

        </div>
      </div>
    </div>

  </div>
</header>
    );
  }
}

export default props => (
  <Header />
);
