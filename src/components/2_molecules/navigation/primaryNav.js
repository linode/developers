import React from "react";
import { StaticQuery, graphql } from "gatsby";

//import Caret from "../../../images/svgs/angle-down-regular.svg";

const _ = require("lodash");

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
    const subMenus = document.getElementsByClassName("c-sub-menu");
    const otherMenus = document.getElementsByClassName("o-menu__switch");
    const header = document.getElementById("menu-header-primary");
    //const mainMenu = document.getElementsByClassName("c-main-menu");

    const hideAll = () => {
      Object.keys(subMenus).map(d => {
        const em = subMenus[d];
        return (
          em.classList.add("visually-hidden", "visibility-hidden") +
          document.body.classList.remove("oh")
        );
      });
    };
    hideAll(); //hide all when page first loads

    header.addEventListener("click", e => {
      const otherMenus = document.getElementsByClassName("c-sub-menu");
      const target = e.target.getAttribute("data-submenu");
      const subMenuContainer = document.getElementById(target);

      const hideAll = () => {
        Object.keys(otherMenus).map(e => {
          const om = otherMenus[e];
          return (
            om !== subMenuContainer &&
            om.classList.add("visually-hidden", "visibility-hidden") +
              document.body.classList.remove("active")
          );
        });
      };

      hideAll();

      if (subMenuContainer !== null) { // if this subcontainer exists
        if (!subMenuContainer.classList.contains("visually-hidden")) { // if this submenu is currently active
          subMenuContainer.classList.add("visually-hidden", "visibility-hidden");
          subMenuContainer.classList.remove("active");
        } else { // if this submenu is not currently active
          subMenuContainer.classList.remove(
            "visually-hidden",
            "visibility-hidden"
          );

          subMenuContainer.classList.add("active");
        }
      }
    });

    document.onkeydown = function(evt) {
      evt = evt || window.event;
      if (evt.keyCode === 27) {
        hideAll();
      }
    };
  }

  openMobileNav = () => {
    const target = document.getElementById("mobile-menus");

    this.setState({
      mobileNavOpen: !this.state.mobileNavOpen
    });

    target.classList.toggle("active");
    target.classList.contains("active")
      ? document.body.classList.add("active")
      : document.body.classList.remove("active");
  };


  render() {
    //const data = this.props.data;
    //const { mobileNavOpen } = this.state;
    return (
      <div className="o-layout__col">
        <div className="o-layout__module c-main-menu">
          <nav
            role="menu"
            className="o-menu o-menu--flex"
            aria-expanded="false"
          >
            <div className="menu-header-primary-container">
              <ul id="menu-header-primary" className="o-menu__list">
                <li className="o-menu__item o-menu__item--why-linode" data-submenu="sub-menu--why-linode">
                  <a className="o-menu__link" href="#sub-menu--why-linode" target="_self" data-submenu="sub-menu--why-linode">
                    <span className="o-menu__title" data-submenu="sub-menu--why-linode">
                      <span className="title" data-submenu="sub-menu--why-linode">
                        Why Linode
                      </span>
                    </span>
                  </a>
                </li>
                <li className="o-menu__item o-menu__item--products" data-submenu="sub-menu--products">
                  <a className="o-menu__link" href="#sub-menu--products" data-submenu="sub-menu--products">
                    <span className="o-menu__title" data-submenu="sub-menu--products">
                      <span className="title" data-submenu="sub-menu--products">
                        Products
                      </span>
                    </span>
                  </a>
                </li>
                <li className="o-menu__item o-menu__item--solutions">
                  <a className="o-menu__link" href="https://linode.com/solutions">
                    <span className="o-menu__title">
                      <span className="title">
                        Solutions
                      </span>
                    </span>
                  </a>
                </li>
                <li className="o-menu__item o-menu__item--marketplace">
                  <a className="o-menu__link" href="https://linode.com/marketplace">
                    <span className="o-menu__title">
                      <span className="title">
                        Marketplace
                      </span>
                    </span>
                  </a>
                </li>
                <li className="o-menu__item o-menu__item--pricing">
                  <a className="o-menu__link" href="https://linode.com/pricing">
                    <span className="o-menu__title">
                      <span className="title">
                        Pricing
                      </span>
                    </span>
                  </a>
                </li>
                <li className="o-menu__item o-menu__item--community" data-submenu="sub-menu--community">
                  <a className="o-menu__link" href="#sub-menu--community" data-submenu="sub-menu--community">
                    <span className="o-menu__title" data-submenu="sub-menu--community">
                      <span className="title" data-submenu="sub-menu--community">
                        Community
                      </span>
                    </span>
                  </a>
                </li>
                <li className="o-menu__item o-menu__item--sign-up">
                  <a className="o-menu__link" href="https://login.linode.com/signup">
                    <span className="o-menu__title">
                      <span className="title">
                        Sign Up
                      </span>
                    </span>
                  </a>
                </li>
                <li className="o-menu__item o-menu__item--search">
                  <a className="o-menu__link" href="https://linode.com/search">
                    <span className="o-menu__title">
                      <span className="title">
                        Search
                      </span>
                    </span>
                  </a>
                </li>
                <li className="o-menu__item o-menu__item--mobile">
                  <a className="o-menu__link" href="#sub-menu--mobile">
                    <span className="o-menu__title">
                      <span className="title">
                        Mobile
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
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
              switch_on
            }
          }
        }
      }
    `}
    render={data => <MainSiteNav data={data} {...props} />}
  />
);
