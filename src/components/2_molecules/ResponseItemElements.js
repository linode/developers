import React from "react";
import Markdown from "react-markdown/with-html";

import Deprecated from "./Deprecated";
import Enum from "./Enum";
import Filterable from "./Filterable";
import Nullable from "./Nullable";
import SubResponse from "./SubResponse";
import CharDisplay from "./charDisplay";

export const ResponseItemElements = props => {
  const { context } = props;
  return (
    <div className="mt-6">
      {context &&
        context.content &&
        context.content.application_json &&
        context.content.application_json.schema &&
        context.content.application_json.schema.properties &&
        Object.keys(context.content.application_json.schema.properties)
          .filter(
            v => context.content.application_json.schema.properties[v] !== null
          )
          .map((p, i) => {
            const l = context.content.application_json.schema.properties[p];
            // console.log(l);
            return (
              l && (
                <div key={i} className="response-wrapper">
                  <div className="lg:flex mb-2 pt-2 initResponse">
                    <div className="w-full lg:w-1/4">
                      <div>
                        <b className={l.deprecated && "line-through"}>{p}</b>
                      </div>
                      {l.x_linode_filterable && <Filterable />}
                      {l.nullable && <Nullable />}
                    </div>
                    <div className="w-full lg:w-3/4">
                      <div>
                        <div className="text-sm leading-text-sm text-grey-darkest">
                          {context.content.application_json.schema.properties
                            .errors || l.items
                            ? "array of objects"
                            : l.type}{" "}
                          <CharDisplay data={l} />
                          {l.pattern && (
                            <span className="tag">{l.pattern}</span>
                          )}
                        </div>
                      </div>
                      {l.enum && <Enum dataSource={l} />}
                      {l.deprecated && <Deprecated />}
                      <div>
                        <Markdown
                          source={l.description}
                          escapeHtml={false}
                          className="api-desc"
                        />
                      </div>
                    </div>
                  </div>
                  {l.properties && (
                    <div className="px-4 mt-4 mb-4 ml-4 subResponse">
                      <SubResponse dataSource={l.properties} />
                    </div>
                  )}
                  {l.items && (
                    <>
                      <div className="px-4 mt-4 mb-4 ml-4 subResponse">
                        {l.items.properties &&
                          Object.keys(l.items.properties).map(
                            (value, index) => {
                              const data = l.items.properties[value];
                              // console.log(data);
                              return (
                                data && (
                                  <div key={index} className="response-wrapper">
                                    <div className="lg:flex mb-4">
                                      <div className="w-full lg:w-1/4">
                                        <b
                                          className={
                                            data.deprecated && "line-through"
                                          }
                                        >
                                          {value}
                                        </b>
                                        {data.x_linode_filterable && (
                                          <Filterable />
                                        )}
                                        {data.nullable && <Nullable />}
                                      </div>
                                      <div className="w-full lg:w-3/4">
                                        <div>
                                          <div className="text-sm text-grey-darkest leading-text-sm">
                                            {data.type && data.type}
                                            {data.pattern && (
                                              <span className="tag">
                                                {data.pattern}
                                              </span>
                                            )}
                                          </div>
                                          {data.enum && (
                                            <Enum dataSource={data} />
                                          )}
                                          {data.deprecated && <Deprecated />}
                                          <div>
                                            <Markdown
                                              source={data.description}
                                              escapeHtml={false}
                                              className="api-desc"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {data.oneOf && (
                                      <div className="px-4 mt-4 mb-4 ml-4 subResponse">
                                        {data.oneOf.map((data, i) => {
                                          return (
                                            <SubResponse
                                              dataSource={data.properties}
                                              key={i}
                                            />
                                          );
                                        })}
                                      </div>
                                    )}
                                    {data.properties && (
                                      <div className="px-4 mt-4 mb-4 ml-4 subResponse">
                                        <SubResponse
                                          dataSource={data.properties}
                                        />
                                      </div>
                                    )}
                                  </div>
                                )
                              );
                            }
                          )}
                      </div>
                      {l.items.allOf && (
                        <div className="px-4 mt-4 mb-4 ml-4 subResponse">
                          {l.items.allOf
                            .filter(v => {
                              return (
                                l.items.properties &&
                                Object.keys(l.items.properties)
                                  .filter(v3 => l.items.properties[v3] !== null)
                                  .map(value => value) !==
                                  Object.keys(v.properties).map(v2 => v2)
                              );
                            })
                            .map((data, i) => {
                              return (
                                <SubResponse
                                  dataSource={data.properties}
                                  key={i}
                                />
                              );
                            })}
                        </div>
                      )}
                    </>
                  )}
                  {l.oneOf && (
                    <div className="px-4 mt-4 mb-4 ml-4 subResponse">
                      {l.oneOf.map((data, i) => {
                        return (
                          <SubResponse dataSource={data.properties} key={i} />
                        );
                      })}
                    </div>
                  )}
                </div>
              )
            );
          })}
    </div>
  );
};

export default ResponseItemElements;
