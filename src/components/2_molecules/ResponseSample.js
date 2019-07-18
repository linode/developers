import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const ResponseItem = props => {
  const { response, r } = props;
  return (
    r && (
      <div>
        <b>{response.replace(/[_]/g, " ")}</b>:&nbsp;
        <SyntaxHighlighter
          language="json"
          style={atomDark}
          className="api-samples"
          codeTagProps={{
            style: { whiteSpace: "pre-wrap" }
          }}
        >
          <div>
            {"{"}
            {r.content &&
              r.content.application_json &&
              r.content.application_json.schema &&
              r.content.application_json.schema.properties &&
              Object.keys(r.content.application_json.schema.properties).map(
                (p, i) => {
                  const l = r.content.application_json.schema.properties[p];
                  const rowLen = Object.keys(
                    r.content.application_json.schema.properties
                  ).length;
                  return (
                    l && (
                      <div key={i} className="ml-4">
                        <div>
                          <div>
                            {l.type !== "array" && p !== "errors" ? (
                              <>
                                "{p}":{" "}
                                <span style={{ color: "#3BB878" }}>
                                  "{l.example}",
                                </span>
                              </>
                            ) : (
                              <>
                                "{p}"{": ["}
                              </>
                            )}
                          </div>
                        </div>
                        {l.properties &&
                          Object.keys(l.properties).map((e, i) => {
                            const data = l.properties[e];
                            const rowLen2 = Object.keys(l.properties).length;
                            return (
                              <div key={i} className="ml-4">
                                <div>
                                  {e}:{" "}
                                  <span style={{ color: "#3BB878" }}>
                                    "{data.example}"{rowLen2 !== i + 1 && ","}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        {l.items &&
                          (l.items.properties && (
                            <div>
                              {"  {"}
                              {Object.keys(l.items.properties).map((e, i) => {
                                const data = l.items.properties[e];
                                const rowLen3 = Object.keys(l.items).length;
                                return (
                                  data && (
                                    <div key={i} className="ml-8">
                                      <div>
                                        "{e}":{" "}
                                        <span style={{ color: "#3BB878" }}>
                                          "{data.example}"
                                          {rowLen3 === i + 1 && ","}
                                        </span>
                                      </div>
                                    </div>
                                  )
                                );
                              })}
                              {"  }"}
                              {l.type !== "array" && (
                                <div>
                                  {"]"}
                                  {rowLen !== i + 1 && ","}
                                </div>
                              )}
                              {p !== "errors" && (
                                <div>
                                  {"]"}
                                  {rowLen !== i + 1 && ","}
                                </div>
                              )}
                            </div>
                          ))}
                      </div>
                    )
                  );
                }
              )}
            {"}"}
          </div>
        </SyntaxHighlighter>
      </div>
    )
  );
};

export default ResponseItem;
