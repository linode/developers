import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { Link } from "gatsby";

import APITitle from "../1_atoms/APITitle";
import SearchHeader from "./search-header";

import Caret from "../../images/svgs/caret.svg";

const _ = require("lodash");

const topMenuItems = [
  "Introduction",
  "Changelog",
  "Access and Authentication",
  "Personal Access Token",
  "OAuth",
  "Requests",
  "Responses",
  "Errors",
  "Pagination",
  "Filtering and Sorting",
  "CLI (Command Line Interface)",
  "APIv3"
];

class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: ""
    };
  }

  componentDidMount() {
    const url = document.location.pathname;
    const urlSplit = url.split("/");
    const apiPath = urlSplit[3];
    const hash = document.location.hash;
    const location = apiPath + "/" + hash;
    const header2 = document.querySelectorAll("h2");

    this.setState({
      activePage: location
    });

    header2 &&
      header2.forEach(h => {
        const label = h.innerText;
        const anchorEl = document.createElement("span");
        anchorEl.id = _.kebabCase(label);
        anchorEl.classList.add("top-menu-anchor");
        return h.parentNode.insertBefore(anchorEl, h);
      });

    setTimeout(() => {
      const activeEl = document.getElementsByClassName("active-item")[0];
      if (activeEl && !activeEl.classList.contains("top-menu-link")) {
        const activeGroup =
          activeEl && activeEl.parentNode.parentNode.parentNode.parentNode;
        activeEl && activeGroup.classList.add("active-group");
      }
    });

    hash &&
      document.getElementById(hash.substr(1)) !== null &&
      window.setTimeout(
        () =>
          document
            .getElementById(hash.substr(1))
            .scrollIntoView({ block: "start", behavior: "smooth" }),
        50
      );
  }

  toggleActive = e => {
    const listGroup = e.target.closest("div");
    if (listGroup && listGroup.classList.contains("active-group")) {
      listGroup.classList.remove("active-group");
    } else if (listGroup) {
      listGroup.classList.add("active-group");
    }
  };

  toggleActiveLink = e => {
    if (e.target.classList.contains("api-link")) {
      document.querySelectorAll(".api-link").forEach(a => {
        if (a.classList.contains("active-item")) {
          a.classList.remove("active-item");
        }
      });
      e.target.classList.add("active-item");
    }
    if (e.target.classList.contains("top-menu-link")) {
      this.setState({
        activePage: `/#${_.kebabCase(e.target.innerText)}`
      });
    }
  };

  render() {
    const { activePage } = this.state;
    const groups = this.props.data.allPaths.group;

    const TopMenu = () =>
      topMenuItems.map((h, i) => {
        const kebobLabel = _.kebabCase(h);
        return (
          <li className="list-reset" key={i}>
            <Link
              to={`/api/v4/#${kebobLabel}`}
              className={`${
                `/#${kebobLabel}` === activePage ? "active-item" : null
              }
              api-link top-menu-link`}
              onClick={this.toggleActiveLink}
            >
              {h}
            </Link>
          </li>
        );
      });

    return (
      <div className="api-navigation-wrapper md:bg-ThemeCell">
        <div className="api-navigation">
          <APITitle />
          <SearchHeader />
          <div>
            <ul className="p-0 ml-1 mb-4">
              <TopMenu />
            </ul>
            {groups.map((group, i) => {
              return (
                <div className="list-container" key={i}>
                  <button
                    onClick={this.toggleActive}
                    className="sidemenu-button"
                  >
                    <span className="mt-0">
                      <b>{group.fieldValue}</b>
                    </span>
                    <span className="caret ml-2">
                      <Caret />
                    </span>
                  </button>
                  <div
                    id={_.kebabCase(group.fieldValue)}
                    className="list-group"
                  >
                    {group.edges.map((link, i) => {
                      const n = link.node;
                      return (
                        <ul key={i} className="p-0">
                          {n.get && (
                            <li className="list-reset">
                              <Link
                                to={`/api/v4/${_.kebabCase(n.name)}`}
                                className={`${
                                  _.kebabCase(n.name) + "/" === activePage
                                    ? "active-item"
                                    : null
                                }
                              api-link
                              `}
                                onClick={this.toggleActiveLink}
                              >
                                {n.get.summary}
                              </Link>
                            </li>
                          )}
                          {n.post && (
                            <li className="list-reset">
                              <Link
                                to={`/api/v4/${_.kebabCase(n.name)}/#post`}
                                className={`${
                                  _.kebabCase(n.name) + "/#post" === activePage
                                    ? "active-item"
                                    : null
                                }
                              api-link
                              `}
                                onClick={this.toggleActiveLink}
                              >
                                {n.post.summary}
                              </Link>
                            </li>
                          )}
                          {n.put && (
                            <li className="list-reset">
                              <Link
                                to={`/api/v4/${_.kebabCase(n.name)}/#put`}
                                className={`${
                                  _.kebabCase(n.name) + "/#put" === activePage
                                    ? "active-item"
                                    : null
                                }
                              api-link
                              `}
                                onClick={this.toggleActiveLink}
                              >
                                {n.put.summary}
                              </Link>
                            </li>
                          )}
                          {n.delete && (
                            <li className="list-reset">
                              <Link
                                to={`/api/v4/${_.kebabCase(n.name)}/#delete`}
                                className={`${
                                  _.kebabCase(n.name) + "/#delete" ===
                                  activePage
                                    ? "active-item"
                                    : null
                                }
                              api-link
                              `}
                                onClick={this.toggleActiveLink}
                              >
                                {n.delete.summary}
                              </Link>
                            </li>
                          )}
                        </ul>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allPaths {
          group(field: tagGroup) {
            field
            fieldValue
            edges {
              node {
                name
                get {
                  summary
                }
                post {
                  summary
                }
                put {
                  summary
                }
                delete {
                  summary
                }
              }
            }
          }
        }
      }
    `}
    render={data => <SideMenu data={data} {...props} />}
  />
);
