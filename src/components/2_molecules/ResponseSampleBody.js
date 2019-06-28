import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const ResponseSampleBody = props => {
  const { context, response } = props;

  const sampleSource = `{
      ${context.content &&
        context.content.application_json &&
        context.content.application_json.schema &&
        context.content.application_json.schema.properties &&
        Object.keys(context.content.application_json.schema.properties)
          .filter(
            v => context.content.application_json.schema.properties[v] !== null
          )
          .map((p, i) => {
            const l = context.content.application_json.schema.properties[p];
            return (
              l &&
              (l.type !== "array" && p !== "errors"
                ? `"${p}": ${
                    l.example
                      ? l.type !== "number" &&
                        l.type !== "integer" &&
                        l.type !== "boolean"
                        ? `${JSON.stringify(l.example)}`
                        : `${l.example}`
                      : p === "id"
                      ? `${'"2737bf16b39ab5d7b4a1"'}`
                      : l.type === "boolean"
                      ? `${"false"}`
                      : !l.properties
                      ? `${'"0"'}`
                      : ""
                  }`
                : `"${p}": [
                  ${l.example &&
                    l.example.map((e, i) => {
                      return `"${e}"`;
                    })}
                    
                  ${
                    !(l.items && l.items.properties)
                      ? `${`"string"`} ${"]"}`
                      : ""
                  }
              `) +
                (l.properties &&
                  `{
                  ${Object.keys(l.properties).map((e, i) => {
                    const data = l.properties[e];
                    return (
                      `"${e}": ${
                        e
                          ? data.type !== "number" &&
                            data.type !== "integer" &&
                            data.type !== "boolean"
                            ? `${JSON.stringify(data.example)}`
                            : `${data.example}`
                          : e === "id"
                          ? `${'"2737bf16b39ab5d7b4a1"'}`
                          : data.type === "boolean"
                          ? `${"false"}`
                          : !data.properties
                          ? `${'"0"'}`
                          : ""
                      }` +
                      (data.properties &&
                        `{
                        ${Object.keys(data.properties).map(o => {
                          const a = data.properties[o];
                          console.log(a.type);
                          return `"${o}": ${
                            a.example
                              ? a.type !== "number" &&
                                a.type !== "integer" &&
                                a.type !== "boolean"
                                ? `${JSON.stringify(a.example)}`
                                : `${a.example}`
                              : `${`["${a.type}"]`}`
                          }`;
                        })}}`)
                    );
                  })}
                }
              `) +
                (l.items &&
                  l.items.properties &&
                  `
                    {
                    ${Object.keys(l.items.properties).map((e, i) => {
                      const data = l.items.properties[e];
                      return (
                        data &&
                        `"${e}": ${
                          data.type !== "number"
                            ? `"${data.example}"`
                            : `${data.example}`
                        }`
                      );
                    })}
                  }
                ]
                `)
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
