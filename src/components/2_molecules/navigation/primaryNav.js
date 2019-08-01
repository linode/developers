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
      subMenuOpen: false
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

  render() {
    const data = this.props.data;
    const { subMenuOpen } = this.state;
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
                  onClick={this.openSubMenu}
                  tabIndex={0}
                >
                  {node.title === "Search" ? (
                    <span className="header-search-icon">
                      <span className="visually-hidden">{node.title}</span>
                    </span>
                  ) : node.title === "Mobile" ? (
                    <span class="header-mobile-icon">
                      <svg
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
                      </svg>
                      <span class="visually-hidden">Menu</span>
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
