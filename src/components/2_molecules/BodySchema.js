import React from "react";
import Markdown from "react-markdown/with-html";

import CharDisplay from "./charDisplay";

export const BodySchema = props => {
  const { data } = props;

  return (
    <>
      <div className="my-4">
        <h3>Request Body Schema</h3>
      </div>
      {data.requestBody.content.application_json &&
        data.requestBody.content.application_json.schema &&
        data.requestBody.content.application_json.schema.properties &&
        Object.keys(
          data.requestBody.content.application_json.schema.properties
        ).map((p, i) => {
          const b =
            data.requestBody.content.application_json.schema.properties[p];
          return (
            b && (
              <div key={i} className="response-wrapper">
                <div className="flex mb-4 pt-2 initResponse">
                  <div className="w-1/4">
                    <div>
                      <b>{p}</b>
                    </div>
                    <div className="leading-xs">
                      {data.requestBody.content.application_json.schema
                        .required &&
                        data.requestBody.content.application_json.schema.required.map(
                          (req, i) => {
                            if (p === req) {
                              return (
                                <span className="text-BaseRed text-sm" key={i}>
                                  Required
                                </span>
                              );
                            }
                            return false;
                          }
                        )}
                    </div>
                  </div>
                  <div className="w-3/4">
                    <div className="text-sm leading-text-sm text-grey-darkest">
                      {b.type} <CharDisplay data={b} />
                      {b.pattern && <span className="tag">{b.pattern}</span>}
                    </div>
                    <Markdown
                      source={b.description}
                      escapeHtml={false}
                      className="api-desc"
                    />
                  </div>
                </div>
              </div>
            )
          );
        })}
      {data.requestBody.content.application_json &&
        data.requestBody.content.application_json.schema &&
        data.requestBody.content.application_json.schema.allOf &&
        Object.keys(data.requestBody.content.application_json.schema.allOf).map(
          a => {
            const s = data.requestBody.content.application_json.schema.allOf[a];
            return (
              s.properties &&
              Object.keys(s.properties).map((p, i) => {
                const b = s.properties[p];
                return (
                  b && (
                    <div key={i} className="response-wrapper">
                      <div className="flex pt-2 mb-4 initResponse">
                        <div className="w-1/4">
                          <div>
                            <b>{p}</b>
                          </div>
                          <div className="leading-xs">
                            {data.requestBody.content.application_json.schema
                              .required &&
                              data.requestBody.content.application_json.schema.required.map(
                                (req, i) => {
                                  if (p === req) {
                                    return (
                                      <span
                                        className="text-BaseRed text-sm"
                                        key={i}
                                      >
                                        Required
                                      </span>
                                    );
                                  }
                                  return false;
                                }
                              )}
                          </div>
                        </div>
                        <div className="w-3/4">
                          <div className="text-sm leading-text-sm text-grey-darkest">
                            {b.type} <CharDisplay data={b} />
                            {b.pattern && (
                              <span className="tag">{b.pattern}</span>
                            )}
                          </div>
                          <Markdown
                            source={b.description}
                            escapeHtml={false}
                            className="api-desc"
                          />
                        </div>
                      </div>
                    </div>
                  )
                );
              })
            );
          }
        )}
    </>
  );
};

export default BodySchema;
