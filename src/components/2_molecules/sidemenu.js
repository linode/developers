import React from "react";
import { graphql, StaticQuery } from "gatsby";

const SideMenu = ({ data }) => {
  const nodes = data.allPaths.edges;
  const groups = data.allPaths.group;

  // console.log(data);

  return (
    <ul>
      {groups.map((group, i) => {
        // const n = group.edges;

        // console.log(
        //   group.edges.map(link => {
        //     return link.node.get && link.node.get.summary;
        //   })
        // );

        return (
          <div key={i}>
            <h2>{group.fieldValue}</h2>
            {group.edges.map(link => {
              const n = link.node;
              return (
                <div>
                  {n.get && (
                    <li className="list-reset">
                      <a href={`/api/v4${n.name}#get`}>{n.get.summary}</a>
                    </li>
                  )}
                  {n.post && (
                    <li className="list-reset">
                      <a href={`/api/v4${n.name}#post`}>{n.post.summary}</a>
                    </li>
                  )}
                  {n.put && (
                    <li className="list-reset">
                      <a href={`/api/v4${n.name}#put`}>{n.put.summary}</a>
                    </li>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </ul>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allPaths {
          edges {
            node {
              name
              get {
                summary
                tags
              }
              post {
                summary
                tags
              }
              put {
                summary
                tags
              }
            }
          }
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

{
  /* {nodes.map((node, i) => {
        const n = node.node;

        return (
          <div key={i}>
            <h1>{n.get && n.get.tags}</h1>
            {n.get && (
              <li className="list-reset">
                <a href={`/api/v4${n.name}#get`}>{n.get.summary}</a>
              </li>
            )}
            {n.post && (
              <li className="list-reset">
                <a href={`/api/v4${n.name}#post`}>{n.post.summary}</a>
              </li>
            )}
            {n.put && (
              <li className="list-reset">
                <a href={`/api/v4${n.name}#put`}>{n.put.summary}</a>
              </li>
            )}
          </div>
        );
      })} */
}
