import React from "react";
import Markdown from "react-markdown/with-html";

import CharDisplay from "../2_molecules/charDisplay";

export const ResponseItemElements = props => {
  const { context } = props;
  return (
    <div className="mt-6">
      {context &&
        context.content &&
        context.content.application_json &&
        context.content.application_json.schema &&
        context.content.application_json.schema.properties &&
        Object.keys(context.content.application_json.schema.properties).map(
          (p, i) => {
            const l = context.content.application_json.schema.properties[p];
            return (
              l && (
                <div key={i} className="response-wrapper">
                  <div className="lg:flex mb-2 pt-2 initResponse">
                    <div className="w-full lg:w-1/4">
                      <div>
                        <b className={l.deprecated && "line-through"}>{p}</b>
                      </div>
                      {l.x_linode_filterable && (
                        <div className="leading-xs">
                          <span className="text-grey-dark text-sm">
                            Filterable
                          </span>
                        </div>
                      )}
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
                      {l.enum && (
                        <div className="flex flex-wrap mb-2">
                          <span className="text-sm">Enum: </span>
                          {l.enum.map((e, i) => {
                            return (
                              <span
                                className="tag mr-2 mb-1 inline-block"
                                key={i}
                              >
                                "{e}"
                              </span>
                            );
                          })}
                        </div>
                      )}
                      {l.deprecated && (
                        <div>
                          <span className="tag tag-deprecated">Deprecated</span>
                        </div>
                      )}
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
                      {Object.keys(l.properties).map((e, i) => {
                        const data = l.properties[e];
                        return (
                          data && (
                            <div key={i} className="lg:flex mb-4">
                              <div className="w-full lg:w-1/4">
                                <b
                                  className={data.deprecated && "line-through"}
                                >
                                  {e}
                                </b>
                              </div>
                              <div className="w-full lg:w-3/4">
                                <div>
                                  <div className="text-sm text-grey-darkest">
                                    {data.type && data.type}{" "}
                                    {data.pattern && (
                                      <span className="tag">
                                        {data.pattern}
                                      </span>
                                    )}
                                  </div>
                                  {data.enum && (
                                    <div className="flex flex-wrap mb-2">
                                      <span className="text-sm mr-2">
                                        Enum:
                                      </span>
                                      {data.enum.map((e, i) => {
                                        return (
                                          <span
                                            className="tag mr-2 mb-1 inline-block"
                                            key={i}
                                          >
                                            "{e}"
                                          </span>
                                        );
                                      })}
                                    </div>
                                  )}
                                  {data.deprecated && (
                                    <div>
                                      <span className="tag tag-deprecated">
                                        Deprecated
                                      </span>
                                    </div>
                                  )}
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
                          )
                        );
                      })}
                    </div>
                  )}
                  {l.items && (
                    <div className="px-4 mt-4 mb-4 ml-4 subResponse ">
                      {l.items.properties &&
                        Object.keys(l.items.properties).map((e, i) => {
                          const data = l.items.properties[e];
                          return (
                            data && (
                              <div key={i} className="response-wrapper">
                                <div className="lg:flex mb-4">
                                  <div className="w-full lg:w-1/4">
                                    <b
                                      className={
                                        data.deprecated && "line-through"
                                      }
                                    >
                                      {e}
                                    </b>
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
                                        <div className="flex flex-wrap mb-2">
                                          <span className="text-sm mr-2">
                                            Enum:
                                          </span>
                                          {data.enum.map((e, i) => {
                                            return (
                                              <span
                                                className="tag mr-2 mb-1 inline-block"
                                                key={i}
                                              >
                                                "{e}"
                                              </span>
                                            );
                                          })}
                                        </div>
                                      )}
                                      {data.deprecated && (
                                        <div>
                                          <span className="tag tag-deprecated">
                                            Deprecated
                                          </span>
                                        </div>
                                      )}
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
                                {data.properties && (
                                  <div className="px-4 mt-4 mb-4 ml-4 subResponse">
                                    {Object.keys(data.properties).map(
                                      (dp, i) => {
                                        const dps = data.properties[dp];
                                        return (
                                          dps && (
                                            <div
                                              key={i}
                                              className="lg:flex mb-4"
                                            >
                                              <div className="w-full lg:w-1/4">
                                                <b
                                                  className={
                                                    data.deprecated &&
                                                    "line-through"
                                                  }
                                                >
                                                  {dp}
                                                </b>
                                              </div>
                                              <div className="w-full lg:w-3/4">
                                                <div>
                                                  <div className="text-sm text-grey-darkest">
                                                    {data.type && data.type}{" "}
                                                    {data.pattern && (
                                                      <span className="tag">
                                                        {data.pattern}
                                                      </span>
                                                    )}
                                                  </div>
                                                  {dps.enum && (
                                                    <div className="flex flex-wrap mb-2">
                                                      <span className="text-sm mr-2">
                                                        Enum:
                                                      </span>
                                                      {data.enum.map((e, i) => {
                                                        return (
                                                          <span
                                                            className="tag mr-2 mb-1 inline-block"
                                                            key={i}
                                                          >
                                                            "{e}"
                                                          </span>
                                                        );
                                                      })}
                                                    </div>
                                                  )}
                                                  {dps.deprecated && (
                                                    <div>
                                                      <span className="tag tag-deprecated">
                                                        Deprecated
                                                      </span>
                                                    </div>
                                                  )}
                                                  <div>
                                                    <Markdown
                                                      source={dps.description}
                                                      escapeHtml={false}
                                                      className="api-desc"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          )
                                        );
                                      }
                                    )}
                                  </div>
                                )}
                              </div>
                            )
                          );
                        })}
                    </div>
                  )}
                </div>
              )
            );
          }
        )}
    </div>
  );
};

export default ResponseItemElements;
