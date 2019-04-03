import React from 'react';

import ResponseItem from "../../components/2_molecules/ResponseItem";

export const ResponseList = (props) => {
  const { responses } = props;
  return(
    <>
    <h3>Responses</h3>
    {Object.keys(responses).map((e, i) => {
      <ResponseItem response={responses[e]} key={i} />
    })}
    </>)
}