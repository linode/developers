import React from "react";
import { StaticQuery, graphql } from "gatsby";

const TheMaker = ({ data }) => {
  return (
    <>
      {data.__type.fields.map(a => (
        <>
          {a.name} {"{"}
          {a.type.fields.map(b => (
            <>{b.name} </>
          ))}
          {"}"}
        </>
      ))}
    </>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query IntrospectionQuery {
        __type(name: "properties_586") {
          name
          fields {
            name
            type {
              fields {
                name
                type {
                  fields {
                    name
                    type {
                      fields {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <TheMaker data={data} {...props} />}
  />
);
