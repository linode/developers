import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { Link } from "gatsby";
// import Collapse, { Panel } from "rc-collapse";
import SearchHeader from "./search-header";

// import "rc-collapse/assets/index.css";

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
    const location = urlSplit[3];

    this.setState({
      activePage: location
    });
    setTimeout(() => {
      const activeEl = document.getElementsByClassName("active")[0];
      const activeGroup = activeEl.parentNode.parentNode.parentNode.parentNode;
      activeGroup.classList.add("active-group");
    });
  }

  toggleActive = e => {
    const listGroup = e.target.closest("div");

    console.log(listGroup);

    if (listGroup && listGroup.classList.contains("active-group")) {
      listGroup.classList.remove("active-group");
    } else if (listGroup) {
      listGroup.classList.add("active-group");
    }
  };

  render() {
    const { activePage } = this.state;
    const groups = this.props.data.allPaths.group;

    // console.log(activeKey);

    return (
      <div>
        <SearchHeader />
        <div>
          {groups.map((group, i) => {
            return (
              <div className="list-container" key={i}>
                <a
                  href="javascript:;"
                  onClick={this.toggleActive}
                  className="block"
                >
                  <h3 className="mt-0">{group.fieldValue}</h3>
                </a>
                <div id={_.kebabCase(group.fieldValue)} className="list-group">
                  {group.edges.map((link, i) => {
                    const n = link.node;
                    return (
                      <ul key={i} className="p-0">
                        {n.get && (
                          <li className="list-reset">
                            <Link
                              to={`/api/v4/${_.kebabCase(n.name)}`}
                              className={
                                _.kebabCase(n.name) === activePage
                                  ? "active"
                                  : null
                              }
                            >
                              {n.get.summary}
                            </Link>
                          </li>
                        )}
                        {n.post && (
                          <li className="list-reset">
                            <Link to={`/api/v4/${_.kebabCase(n.name)}#post`}>
                              {n.post.summary}
                            </Link>
                          </li>
                        )}
                        {n.put && (
                          <li className="list-reset">
                            <Link to={`/api/v4/${_.kebabCase(n.name)}#put`}>
                              {n.put.summary}
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
              }
            }
          }
        }
      }
    `}
    render={data => <SideMenu data={data} {...props} />}
  />
);
