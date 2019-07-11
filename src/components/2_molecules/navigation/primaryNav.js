import React from "react";
import { StaticQuery, graphql } from "gatsby";

import SubMenus from "./subMenus";
import WhyPrimaryNav from "./whyPrimaryNav";
import WhyServicesNav from "./whyServicesNav";

import Caret from "../../../images/svgs/angle-down-regular.svg";
import SearchIcon from "../../../images/svgs/search-solid.svg";

const _ = require("lodash");

class MainSiteNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subMenuOpen: false
    };
  }

  openSubMenu = e => {
    const target = e.target.getAttribute("data-submenu");
    const subMenuContainer = document.getElementById(target);

    subMenuContainer !== null &&
      this.setState({
        subMenuOpen: !this.state.subMenuOpen
      });

    subMenuContainer !== null &&
      (this.state.subMenuOpen === true
        ? document.body.classList.remove("oh")
        : document.body.classList.add("oh"));
  };

  render() {
    const data = this.props.data;
    const { subMenuOpen } = this.state;
    return (
      <>
        <nav
          id="main-menu"
          role="menu"
          className="primary-nav"
          aria-expanded="false"
        >
          {data.allHeaderPrimary.edges.map(link => {
            const node = link.node;
            return (
              <>
                <a
                  key={node.id}
                  href={node.url ? node.url : null}
                  className={`header__link primary-nav__link ${
                    node.toggle ? "dropdown" : ""
                  } ${_.kebabCase(node.title)}`}
                  role="menuitem"
                  data-submenu={
                    node.toggle ? _.kebabCase(node.toggle) : undefined
                  }
                  onClick={this.openSubMenu}
                >
                  {node.title !== "Search" ? (
                    node.title
                  ) : (
                    <span className="search-icon">
                      <span className="visually-hidden">{node.title}</span>
                      <SearchIcon />
                    </span>
                  )}
                </a>
                {node.toggle && (
                  <span className="primary-nav__caret">
                    <Caret />
                  </span>
                )}
              </>
            );
          })}
          <SubMenus
            id="js-tab-why-linode"
            columns={[<WhyPrimaryNav />, <WhyServicesNav />]}
            subMenuOpen={subMenuOpen}
          />
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
