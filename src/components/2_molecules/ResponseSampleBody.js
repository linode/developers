import { getOr } from "lodash/fp";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const ResponseSampleBody = props => {
  const { context, response } = props;
  const properties = getOr(
    [],
    ["content", "application_json", "schema", "properties"],
    context
  );

  const sampleSource = `
      {
      ${properties &&
        Object.keys(properties)
          .filter(v => properties[v] !== null)
          .map(p => {
            const l = properties[p];
            return (
              l &&
              (l.type !== "array" && l.type !== "object" && p !== "errors"
                ? `"${p}": ${
                    p === "id"
                      ? "1234"
                      : l.type === "number" || l.type === "integer"
                      ? `${
                          l.example && l.example !== null
                            ? l.example
                            : `${'""'}`
                        }`
                      : `${JSON.stringify(l.example ? l.example : "")}`
                  }`
                : `"${p}" : [`) +
                (l.example && l.type === "array" && !l.items
                  ? Object.keys(l.example).map(v => {
                      const va = l.example[v];
                      return `"${va}"`;
                    })
                  : "") +
                (l.properties &&
                  `{` +
                    Object.keys(l.properties)
                      .filter(v => l.properties[v] !== null)
                      .map(e => {
                        const data = l.properties[e];
                        return `
                        "${e}": ${
                          data.example
                            ? JSON.stringify(data.example)
                            : data.type === "object" && data.properties
                            ? `{
                              ${Object.keys(data.properties)
                                .filter(v => data.properties[v] !== null)
                                .map(s => {
                                  const dps = data.properties[s];
                                  return dps
                                    ? `"${s}": ${
                                        dps.example
                                          ? JSON.stringify(dps.example)
                                          : dps.type === "object" &&
                                            dps.properties
                                          ? `{
                                          ${Object.keys(dps.properties)
                                            .filter(
                                              v => dps.properties[v] !== null
                                            )
                                            .map(s2 => {
                                              const dps2 = dps.properties[s2];
                                              return dps2
                                                ? `"${s2}": ${JSON.stringify(
                                                    dps2.example
                                                      ? dps2.example
                                                      : ""
                                                  )}`
                                                : "";
                                            })}}`
                                          : ""
                                      }`
                                    : "";
                                })}}`
                            : ""
                        }
                    `;
                      }) +
                    `}`) +
                (l.items && l.items.properties
                  ? `{
                  ${Object.keys(l.items.properties)
                    .filter(v => l.items.properties[v] !== null)
                    .map(e => {
                      const data = l.items.properties[e];
                      return data &&
                        (data.type !== "array" &&
                          data.type !== "object" &&
                          !data.oneOf)
                        ? `
                        "${e}": ${JSON.stringify(
                            data.example ? data.example : ""
                          )}
                      `
                        : data && data && data.oneOf
                        ? `"${e}": {
                          ${data.oneOf.map(o => {
                            return (
                              o.properties &&
                              Object.keys(o.properties)
                                .filter(v => o.properties[v] !== null)
                                .map(oo => {
                                  const ro = o.properties[oo];
                                  return ro &&
                                    (ro.type === "object" && ro.properties)
                                    ? `"${oo}": {
                                      ${Object.keys(ro.properties)
                                        .filter(
                                          dp => ro.properties[dp] !== null
                                        )
                                        .map(s => {
                                          const dps = ro.properties[s];
                                          return dps
                                            ? `"${s}": ${JSON.stringify(
                                                dps.example ? dps.example : ""
                                              )}`
                                            : "";
                                        })}}`
                                    : ro.type !== "object"
                                    ? `"${oo}": ${JSON.stringify(
                                        ro.example ? ro.example : ""
                                      )}`
                                    : "";
                                })
                            );
                          })}}`
                        : data && data.properties && data.type === "object"
                        ? `"${e}": {
                      ${Object.keys(data.properties)
                        .filter(dp => data.properties[dp] !== null)
                        .map(e => {
                          const dps = data.properties[e];
                          return dps
                            ? `"${e}": ${JSON.stringify(
                                dps.example ? dps.example : ""
                              )}`
                            : "";
                        })}}`
                        : data && data.type === "array"
                        ? data.example
                          ? `"${e}": [` +
                            Object.keys(data.example).map(v => {
                              const va = data.example[v];
                              return `"${va}"`;
                            }) +
                            `]`
                          : `"${e}": ${"[ ]"}`
                        : "";
                    })}}`
                  : "") +
                (l.type === "array" || l.type === "object" || p === "errors"
                  ? `]`
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
