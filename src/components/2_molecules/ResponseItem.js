import React from "react";
import Markdown from "react-markdown/with-html";

export const ResponseItem = props => {
  const { response, r, m } = props;
  return (
    r && (
      <div className="mt-8">
        <p
          className={`text-lg p-1 pl-4 text-xl ${
            response === "_200"
              ? "response-200 text-BaseGreen"
              : response === "default"
              ? "response-default text-BaseRed"
              : null
          }
      `}
        >
          <b>{response.replace(/[_]/g, " ")}</b>: {r.description}
        </p>
        <div className="mt-6">
          {r.content &&
            r.content.application_json &&
            r.content.application_json.schema &&
            r.content.application_json.schema.properties &&
            Object.keys(r.content.application_json.schema.properties).map(
              (p, i) => {
                const l = r.content.application_json.schema.properties[p];
                return (
                  l && (
                    <div key={i} className="response-wrapper">
                      <div className="flex mb-2 pt-2 initResponse">
                        <div className="w-1/4">
                          <div>
                            <b>{p}</b>
                          </div>
                          {m.requestBody &&
                            m.requestBody.content &&
                            m.requestBody.content.application_json &&
                            m.requestBody.content.application_json.schema &&
                            m.requestBody.content.application_json.schema
                              .required &&
                            m.requestBody.content.application_json.schema.required.map(
                              (req, i) => {
                                if (p === req) {
                                  return (
                                    <div className="leading-xs" key={i}>
                                      <span className="text-BaseRed text-sm">
                                        Required
                                      </span>
                                    </div>
                                  );
                                }
                                return false;
                              }
                            )}
                        </div>
                        <div className="w-3/4">
                          <div>
                            <div className="text-sm leading-text-sm text-grey-darkest">
                              {r.content.application_json.schema.properties
                                .errors || l.items
                                ? "array of objects"
                                : l.type}{" "}
                              {l.type === "string" &&
                                l.maxLength &&
                                !l.minLength && (
                                  <span className="tag">
                                    {`${l.maxLength}${" "}<= characters`}
                                  </span>
                                )}
                              {l.type === "string" &&
                                l.maxLength &&
                                l.minLength && (
                                  <span className="tag">
                                    {`${" ["} ${l.minLength}${" .. "}${
                                      l.maxLength
                                    }${"] "} characters`}{" "}
                                  </span>
                                )}
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
                              <div key={i} className="flex mb-4">
                                <div className="w-1/4">
                                  <b>{e}</b>
                                </div>
                                <div className="w-3/4">
                                  <div>
                                    <div className="text-sm text-grey-darkest">
                                      {data.type}{" "}
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
                            );
                          })}
                        </div>
                      )}
                      {l.items && (
                        <div className="px-4 mt-4 mb-4 ml-4 subResponse">
                          {l.items.properties &&
                            Object.keys(l.items.properties).map((e, i) => {
                              const data = l.items.properties[e];
                              return (
                                data && (
                                  <div key={i} className="flex mb-4">
                                    <div className="w-1/4">
                                      <b>{e}</b>
                                    </div>
                                    <div className="w-3/4">
                                      <div>
                                        <div className="text-sm text-grey-darkest leading-text-sm">
                                          {data.type}
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
                    </div>
                  )
                );
              }
            )}
        </div>
      </div>
    )
  );
};

export default ResponseItem;
