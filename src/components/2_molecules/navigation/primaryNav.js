import React from "react";
import { StaticQuery, graphql } from "gatsby";

import SubMenus from "./subMenus";
import WhyMenus from "./whyMenus";
import ProductsMenus from "./productsMenus";
import CommunityMenus from "./communityMenus";

import Caret from "../../../images/svgs/angle-down-regular.svg";

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

  componentDidMount() {
    const subMenus = document.getElementById("sub-menus");
    const otherMenus = document.getElementsByClassName("sub-menu");
    const header = document.getElementById("header");

    const hideAll = () => {
      Object.keys(otherMenus).map(e => {
        const om = otherMenus[e];
        return (
          om.classList.add("visually-hidden", "visibility-hidden") +
          document.body.classList.remove("oh")
        );
      });
    };

    header.addEventListener("click", e => {
      !e.target.classList.contains("primary-nav__link") &&
        !this.isDescendant(subMenus, e.target) &&
        hideAll();
    });

    document.onkeydown = function(evt) {
      evt = evt || window.event;
      if (evt.keyCode === 27) {
        hideAll();
      }
    };
  }

  openSubMenu = e => {
    const otherMenus = document.getElementsByClassName("sub-menu");
    const target = e.target.getAttribute("data-submenu");
    const subMenuContainer = document.getElementById(target);

    const hideAll = () => {
      Object.keys(otherMenus).map(e => {
        const om = otherMenus[e];
        return (
          om !== subMenuContainer &&
          om.classList.add("visually-hidden", "visibility-hidden") +
            document.body.classList.remove("oh")
        );
      });
    };

    hideAll();

    if (subMenuContainer !== null) {
      if (!subMenuContainer.classList.contains("visually-hidden")) {
        subMenuContainer.classList.add("visually-hidden", "visibility-hidden");
        document.body.classList.remove("oh");
      } else {
        subMenuContainer.classList.remove(
          "visually-hidden",
          "visibility-hidden"
        );
        document.body.classList.add("oh");
      }
    }
  };

  openMobileNav = () => {
    const target = document.getElementById("mobile-menus");

    this.setState({
      mobileNavOpen: !this.state.mobileNavOpen
    });

    target.classList.toggle("active");
    target.classList.contains("active")
      ? document.body.classList.add("oh")
      : document.body.classList.remove("oh");
  };

  render() {
    const data = this.props.data;
    const { subMenuOpen, mobileNavOpen } = this.state;
    return (
      <>
        <nav
          id="primary-nav"
          role="menu"
          className="primary-nav"
          aria-expanded="false"
        >
          {data.allHeaderPrimary.edges.map((link, i) => {
            const node = link.node;
            return (
              <React.Fragment key={i}>
                <a
                  key={node.id}
                  href={node.url ? node.url : "#"}
                  className={`header__link primary-nav__link ${
                    node.toggle ? "dropdown" : ""
                  } ${_.kebabCase(node.title)}`}
                  role="menuitem"
                  data-submenu={
                    node.toggle ? _.kebabCase(node.toggle) : undefined
                  }
                  onClick={
                    node.title === "Mobile"
                      ? this.openMobileNav
                      : this.openSubMenu
                  }
                  tabIndex={0}
                >
                  {node.title === "Search" ? (
                    <span className="header-search-icon">
                      <span className="visually-hidden">{node.title}</span>
                    </span>
                  ) : node.title === "Mobile" ? (
                    <span className="header-mobile-icon">
                      {mobileNavOpen === true ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          <path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z" />
                        </svg>
                      )}
                      <span className="visually-hidden">Menu</span>
                    </span>
                  ) : (
                    node.title
                  )}
                </a>
                {node.toggle && node.title !== "Mobile" && (
                  <span className="primary-nav__caret">
                    <Caret />
                  </span>
                )}
              </React.Fragment>
            );
          })}
          <div id="sub-menus">
            <SubMenus
              id="js-tab-why-linode"
              menus={<WhyMenus />}
              subMenuOpen={subMenuOpen}
            />
            <SubMenus
              id="js-tab-products"
              menus={<ProductsMenus />}
              subMenuOpen={subMenuOpen}
            />
            <SubMenus
              id="js-tab-community"
              menus={<CommunityMenus />}
              subMenuOpen={subMenuOpen}
            />
          </div>
        </nav>
      </>
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
              toggle
            }
          }
        }
      }
    `}
    render={data => <MainSiteNav data={data} {...props} />}
  />
);
