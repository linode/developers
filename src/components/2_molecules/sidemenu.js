import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { Link } from "gatsby";
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
      const activeEl = document.getElementsByClassName("active")[0];
      const activeGroup =
        activeEl && activeEl.parentNode.parentNode.parentNode.parentNode;
      activeEl && activeGroup.classList.add("active-group");
    });

    hash &&
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
        if (a.classList.contains("active")) {
          a.classList.remove("active");
        }
      });
      e.target.classList.add("active");
    }
  };

  render() {
    const { activePage } = this.state;
    const groups = this.props.data.allPaths.group;

    return (
      <div className="api-navigation mb-8">
        <SearchHeader />
        <div>
          {groups.map((group, i) => {
            return (
              <div className="list-container" key={i}>
                <span className="caret mr-2">
                  <Caret />
                </span>
                <button onClick={this.toggleActive} className="inline-block">
                  <h3 className="mt-0">{group.fieldValue}</h3>
                </button>
                <div id={_.kebabCase(group.fieldValue)} className="list-group">
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
                                  ? "active"
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
                                  ? "active"
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
                                  ? "active"
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
                                _.kebabCase(n.name) + "/#delete" === activePage
                                  ? "active"
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
    );
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allPaths {
          group(field: get___tags) {
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
