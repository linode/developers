import React from "react";

export const ResponseItem = props => {
  const { response, r, m } = props;
  return (
    r && (
      <div>
        <p
          className={`text-lg p-2 ${
            response === "_200"
              ? "bg-BaseGreenLight text-BaseGreen"
              : response === "default"
              ? "bg-BaseRedLight text-BaseRed"
              : null
          }
      `}
        >
          <b>{response.replace(/[_]/g, " ")}</b>:&nbsp;
          {r.description}
        </p>
        <hr className="border border-BaseNavGrey" />
        <div>
          {r.content &&
            r.content.application_json &&
            r.content.application_json.schema &&
            r.content.application_json.schema.properties &&
            Object.keys(r.content.application_json.schema.properties).map(
              (p, i) => {
                const l = r.content.application_json.schema.properties[p];
                // console.log(m);
                return (
                  l && (
                    <div key={i}>
                      <div className="flex mb-4">
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
                                    <span key={i} className="text-BaseRed">
                                      Required
                                    </span>
                                  );
                                }
                                return false;
                              }
                            )}
                        </div>
                        <div className="w-3/4">
                          <div>
                            {r.content.application_json.schema.properties
                              .errors || l.items
                              ? "array of objects"
                              : l.type}
                            {l.type === "string" &&
                              l.maxLength &&
                              !l.minLength &&
                              `${" "} ${l.maxLength}${" "}<= characters`}
                            {l.type === "string" &&
                              l.maxLength &&
                              l.minLength &&
                              `${" ["} ${l.minLength}${" .. "}${
                                l.maxLength
                              }${"] "} characters`}{" "}
                            {l.pattern && l.pattern}
                          </div>
                          <div>
                            <div>{l.description}</div>
                          </div>
                          {console.log(l)}
                        </div>
                      </div>
                      {l.properties && (
                        <div className="py-2 px-4 bg-ThemeBeige mt-2 mb-4">
                          {Object.keys(l.properties).map((e, i) => {
                            const data = l.properties[e];
                            return (
                              <div key={i} className="flex mb-4">
                                <div className="w-1/4">
                                  <b>{e}</b>
                                </div>
                                <div className="w-3/4">
                                  <div>
                                    <div>{data.type}</div>
                                    <div>{data.description}</div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                      {l.items && (
                        <div className="py-2 px-4 bg-ThemeBeige mt-2 mb-4">
                          {Object.keys(l.items.properties).map((e, i) => {
                            const data = l.items.properties[e];
                            return (
                              data && (
                                <div key={i} className="flex mb-4">
                                  <div className="w-1/4">
                                    <b>{e}</b>
                                  </div>
                                  <div className="w-3/4">
                                    <div>
                                      <div>{data.type}</div>
                                      <div>{data.description}</div>
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
