import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const ResponseSampleBody = props => {
  const { context, response } = props;

  const sampleSource = `
      {
      ${context.content &&
        context.content.application_json &&
        context.content.application_json.schema &&
        context.content.application_json.schema.properties &&
        Object.keys(context.content.application_json.schema.properties)
          .filter(
            v => context.content.application_json.schema.properties[v] !== null
          )
          .map(p => {
            const l = context.content.application_json.schema.properties[p];
            return (
              l &&
              (l.type !== "array" && l.type !== "object" && p !== "errors"
                ? `"${p}": ${
                    p === "id"
                      ? "1234"
                      : l.type === "number" || l.type === "integer"
                      ? `${l.example}`
                      : `${JSON.stringify(l.example ? l.example : "")}`
                  }`
                : `"${p}" : [`) +
                (l.properties &&
                  `{` +
                    Object.keys(l.properties).map(e => {
                      const data = l.properties[e];
                      return `
                        "${e}": ${JSON.stringify(data.example)}
                    `;
                    }) +
                    `}`) +
                (l.items &&
                  l.items.properties &&
                  `{
                  ${Object.keys(l.items.properties)
                    .filter(v => l.items.properties[v] !== null)
                    .map(e => {
                      const data = l.items.properties[e];
                      return (
                        data &&
                        `
                        "${e}": ${JSON.stringify(
                          data.example ? data.example : ""
                        )}
                      `
                      );
                    })}
                  }`) +
                (l.type === "array" || l.type === "object"
                  ? `
                      ]
                  ` ||
                    (p !== "errors" &&
                      `
                      ]
                  `)
                  : "")
            );
          })}
        }`;

  const sanitized = sampleSource
    .replace(/"undefined"/g, "")
    .replace(/undefined/g, "")
    .replace(/null/g, "");

  try {
    var parsed = JSON.parse(sanitized);
  } catch (e) {
    console.log(e);
  }

  const finalSource = JSON.stringify(parsed, null, 2);
  // const finalSource = sanitized;

  return (
    context &&
    context[response] !== "" && (
      <SyntaxHighlighter
        language="json"
        style={atomDark}
        className="api-samples"
        codeTagProps={{
          style: { whiteSpace: "pre-wrap" }
        }}
      >
        {finalSource}
      </SyntaxHighlighter>
    )
  );
};

export default ResponseSampleBody;
