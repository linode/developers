import React from "react";

import ResponseSample from "../../components/2_molecules/ResponseSample";

export const ResponseList = props => {
  const { responses, options } = props;
  return (
    <>
      <h3>Response Samples</h3>
      {Object.keys(responses).map((e, i) => (
        <ResponseSample
          response={options[e]}
          r={responses[options[e]]}
          key={i}
        />
      ))}
    </>
  );
};

export default ResponseList;
