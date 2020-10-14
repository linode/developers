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
    const subMenus = document.getElementsByClassName("c-sub-menu");
    const header = document.getElementById("menu-header-primary");
    const mobileMenu = document.getElementById("o-menu__link--mobile");

    initGA(['UA-177150-1', 'UA-177150-30']);
    PageView();

    const hideAll = () => {
      Object.keys(subMenus).map(d => {
        const em = subMenus[d];
        return (
          em.classList.add("visually-hidden", "visibility-hidden") +
          document.body.classList.remove("active")
        );
      });
    };
    hideAll(); //hide all when page first loads

    for (let i = 0; i < subMenus.length; i++) {
      const otherMenus = document.getElementsByClassName("c-sub-menu");
      const target = subMenus[i].getAttribute("data-submenu");
      const subMenuContainer = document.getElementById(target);

      subMenus[i].addEventListener("click", target => {
        const hideSubMenus = () => {
          Object.keys(otherMenus).map(target => {
            const om = otherMenus[target];
            return (
              om !== subMenuContainer &&
              om.classList.add("visually-hidden", "visibility-hidden") +
                document.body.classList.remove("active")
            );
          });
        };

        hideSubMenus();

        if (subMenuContainer !== null) { // if this subcontainer exists
          if (!subMenuContainer.classList.contains("visually-hidden")) { // if this submenu is currently active
            subMenuContainer.classList.add("visually-hidden", "visibility-hidden");
            subMenuContainer.classList.remove("active");
            if (target === "sub-menu--mobile") {
              document.getElementById("o-menu__link--mobile").classList.remove("active");
            }
          } else { // if this submenu is not currently active
            subMenuContainer.classList.remove(
              "visually-hidden",
              "visibility-hidden"
            );

            subMenuContainer.classList.add("active");
            if (target === "sub-menu--mobile") {
              document.getElementById("o-menu__link--mobile").classList.add("active");
            }
          }
        }
      });
    }


    header.addEventListener("click", e => {
      const otherMenus = document.getElementsByClassName("c-sub-menu");
      const target = e.target.getAttribute("data-submenu");
      const subMenuContainer = document.getElementById(target);

      const hideSubMenus = () => {
        Object.keys(otherMenus).map(e => {
          const om = otherMenus[e];
          return (
            om !== subMenuContainer &&
            om.classList.add("visually-hidden", "visibility-hidden") +
              document.body.classList.remove("active")
          );
        });
      };

      hideSubMenus();

      if (subMenuContainer !== null) { // if this subcontainer exists
        if (!subMenuContainer.classList.contains("visually-hidden")) { // if this submenu is currently active
          subMenuContainer.classList.add("visually-hidden", "visibility-hidden");
          subMenuContainer.classList.remove("active");
          if (target === "sub-menu--mobile") {
            document.getElementById("o-menu__link--mobile").classList.remove("active");
          }
        } else { // if this submenu is not currently active
          subMenuContainer.classList.remove(
            "visually-hidden",
            "visibility-hidden"
          );

          subMenuContainer.classList.add("active");
          if (target === "sub-menu--mobile") {
            document.getElementById("o-menu__link--mobile").classList.add("active");
          }
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
              <li className="o-menu__item" data-submenu="sub-menu--why-linode">
                <a className="o-menu__link" href="#sub-menu--why-linode" target="_self" data-submenu="sub-menu--why-linode">
                  <span className="o-menu__title" data-submenu="sub-menu--why-linode">
                    Why Linode
                  </span>
                </a>
              </li>
              <li className="o-menu__item" data-submenu="sub-menu--products">
                <a className="o-menu__link" href="#sub-menu--products" data-submenu="sub-menu--products">
                  <span className="o-menu__title" data-submenu="sub-menu--products">
                    Products
                  </span>
                </a>
              </li>
              <li className="o-menu__item">
                <a className="o-menu__link" href="https://linode.com/solutions">
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
              <li className="o-menu__item" data-submenu="sub-menu--pricing">
                <a className="o-menu__link" href="#sub-menu--pricing" data-submenu="sub-menu--pricing">
                  <span className="o-menu__title" data-submenu="sub-menu--pricing">
                    Pricing
                  </span>
                </a>
              </li>
              <li className="o-menu__item" data-submenu="sub-menu--community">
                <a className="o-menu__link" href="#sub-menu--community" data-submenu="sub-menu--community">
                  <span className="o-menu__title" data-submenu="sub-menu--community">
                    Community
                  </span>
                </a>
              </li>
              <li className="o-menu__item o-menu__item--sign-up">
                <a className="o-menu__link" href="https://login.linode.com/signup">
                  <span className="o-menu__title">
                    Sign Up
                  </span>
                </a>
              </li>
              <li className="o-menu__item o-menu__item--mobile" data-submenu="sub-menu--mobile">
                <a id="o-menu__link--mobile" className="o-menu__link" href="#sub-menu--mobile" data-submenu="sub-menu--mobile">
                  <span className="o-menu__title" data-submenu="sub-menu--mobile">
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
