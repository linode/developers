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
                  return (
                    l && (
                      <div key={i}>
                        <div>
                          <div>
                            "{p}": "{l.example}"
                          </div>
                        </div>
                        {l.properties &&
                          Object.keys(l.properties).map((e, i) => {
                            const data = l.properties[e];
                            return (
                              <div key={i} className="ml-4">
                                <div>
                                  {e}: "{data.example}"
                                </div>
                              </div>
                            );
                          })}
                        {l.items &&
                          Object.keys(l.items.properties).map((e, i) => {
                            const data = l.items.properties[e];
                            return (
                              data && (
                                <div key={i}>
                                  <div>
                                    {e}: "{data.example}"
                                  </div>
                                </div>
                              )
                            );
                          })}
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
