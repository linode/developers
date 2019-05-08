import React from "react";

import ResponseItem from "../../components/2_molecules/ResponseItem";

export const ResponseList = props => {
  const { responses, options } = props;
  return (
    <>
      <h3>Responses</h3>
      {Object.keys(responses).map((e, i) => (
        <ResponseItem response={options[e]} r={responses[options[e]]} key={i} />
      ))}
    </>
  );
};

export default ResponseList;
