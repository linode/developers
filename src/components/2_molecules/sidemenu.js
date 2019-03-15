import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { Link } from "gatsby";
import Collapse, { Panel } from "rc-collapse";
import SearchHeader from "./search-header";

import "rc-collapse/assets/index.css";

const _ = require("lodash");

class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: "",
      activeKey: []
    };
  }

  onChange = activeKey => {
    this.setState({
      activeKey
    });
  };

  setActivePage = link => {
    this.setState({
      activePage: link
    });
  };

  // componentDidMount() {}

  render() {
    const { activeKey, activePage } = this.state;
    const groups = this.props.data.allPaths.group;
    // const location = window.location;
    console.log(activePage);
    return (
      <div>
        <SearchHeader />
        <Collapse
          accordion={true}
          activeKey={activeKey}
          onChange={this.onChange}
        >
          {groups.map((group, i) => {
            // console.log(activeKey);
            return (
              <Panel header={group.fieldValue} key={i}>
                {group.edges.map((link, i) => {
                  const n = link.node;
                  return (
                    <ul key={i}>
                      {n.get && (
                        <li className="list-reset">
                          <Link
                            to={`/api/v4/${_.kebabCase(n.name)}`}
                            // onClick={this.setActivePage(n.name)}
                          >
                            {n.get.summary}
                          </Link>
                        </li>
                      )}
                      {n.post && (
                        <li className="list-reset">
                          <Link
                            to={`/api/v4/${_.kebabCase(n.name)}#post`}
                            // onClick={this.setActivePage(n.name)}
                          >
                            {n.post.summary}
                          </Link>
                        </li>
                      )}
                      {n.put && (
                        <li className="list-reset">
                          <Link
                            to={`/api/v4/${_.kebabCase(n.name)}#put`}
                            // onClick={this.setActivePage(n.name)}
                          >
                            {n.put.summary}
                          </Link>
                        </li>
                      )}
                    </ul>
                  );
                })}
              </Panel>
            );
          })}
        </Collapse>
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
