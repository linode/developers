import React from "react";
import { StaticQuery, graphql } from "gatsby";
import {PageView, initGA} from "../tracking";

class MainSiteNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subMenuOpen: false,
      mobileNavOpen: false
    };
  }

  isDescendant(parent, child) {
    var node = child.parentNode;
    while (node !== null) {
      if (node === parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  }

  // do this on initial page render/re-render
  componentDidMount() {

    initGA(['UA-177150-1', 'UA-177150-30']);
    PageView();
  }

  render() {
    return (
      <div className="o-layout__col">
        <div className="o-layout__module c-main-menu">
          <nav
            role="menu"
            className="o-menu o-menu--flex"
            aria-expanded="false"
          >
            <ul id="menu-header-primary" className="o-menu__list">
              <li className="o-menu__item">
                <a className="o-menu__link" href="#sub-menu--why-linode" target="_self" data-submenu="#sub-menu--why-linode">
                  <span className="o-menu__title">
                    Why Linode
                  </span>
                </a>
              </li>
              <li className="o-menu__item">
                <a className="o-menu__link" href="#sub-menu--products" data-submenu="#sub-menu--products">
                  <span className="o-menu__title">
                    Products
                  </span>
                </a>
              </li>
              <li className="o-menu__item">
                <a className="o-menu__link" href="#sub-menu--solutions" data-submenu="#sub-menu--solutions">
                  <span className="o-menu__title">
                    Solutions
                  </span>
                </a>
              </li>
              <li className="o-menu__item">
                <a className="o-menu__link" href="https://linode.com/marketplace">
                  <span className="o-menu__title">
                    Marketplace
                  </span>
                </a>
              </li>
              <li className="o-menu__item">
                <a className="o-menu__link" href="#sub-menu--pricing" data-submenu="#sub-menu--pricing">
                  <span className="o-menu__title">
                    Pricing
                  </span>
                </a>
              </li>
              <li className="o-menu__item">
                <a className="o-menu__link" href="#sub-menu--community" data-submenu="#sub-menu--community">
                  <span className="o-menu__title">
                    Community
                  </span>
                </a>
              </li>
              <li className="o-menu__item o-menu__item--sign-up">
                <a className="o-menu__link" href="https://login.linode.com/signup"  data-promo-override>
                  <span className="o-menu__title">
                    Sign Up
                  </span>
                </a>
              </li>
              <li className="o-menu__item o-menu__item--mobile">
                <a id="o-menu__link--mobile" className="o-menu__link" href="#sub-menu--mobile" data-submenu="#sub-menu--mobile">
                  <span className="o-menu__title">
                    Mobile
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query mainSiteNav {
        allHeaderPrimary {
          edges {
            node {
              id
              title
              url
            }
          }
        }
      }
    `}
    render={data => <MainSiteNav data={data} {...props} />}
  />
);
