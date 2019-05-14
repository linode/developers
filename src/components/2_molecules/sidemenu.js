import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { Link } from "gatsby";

import APITitle from "../1_atoms/APITitle";
import SearchHeader from "./search-header";

import Caret from "../../images/svgs/caret.svg";

const _ = require("lodash");

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

    this.setState({
      activePage: location
    });

    setTimeout(() => {
      const activeEl = document.getElementsByClassName("active-item")[0];
      const activeGroup =
        activeEl && activeEl.parentNode.parentNode.parentNode.parentNode;
      activeEl && activeGroup.classList.add("active-group");
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
  };

  render() {
    const { activePage } = this.state;
    const groups = this.props.data.allPaths.group;

    return (
      <div className="api-navigation-wrapper md:bg-ThemeCell">
        <div className="api-navigation">
          <APITitle />
          <SearchHeader />
          <div>
            {groups.map((group, i) => {
              return (
                <div className="list-container" key={i}>
                  <span className="caret mr-2">
                    <Caret />
                  </span>
                  <button onClick={this.toggleActive} className="inline-block">
                    <span className="mt-0">{group.fieldValue}</span>
                  </button>
                  <div
                    id={_.kebabCase(group.fieldValue)}
                    className="list-group"
                  >
                    {group.edges.map((link, i) => {
                      const n = link.node;
                      return (
                        <ul key={i} className="p-0 pl-4">
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
