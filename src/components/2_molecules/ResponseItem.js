import React from "react";
import Markdown from "react-markdown/with-html";

import ResponseItemElements from "../2_molecules/ResponseItemElements";
import CharDisplay from "../2_molecules/charDisplay";

export const ResponseItem = props => {
  const { response, r, m, mode } = props;
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
        {(mode === "put" || mode === "post") && response !== "default" ? (
          <ResponseItemElements context={m.requestBody} />
        ) : (
          <ResponseItemElements context={r} />
        )}
      </div>
    )
  );
};

export default ResponseItem;
