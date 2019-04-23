import React from "react";

export const ResponseSampleTitle = props => {
  const { response, r, className } = props;
  return (
    r && <span className={className}>{response.replace(/[_]/g, " ")}</span>
  );
};

export default ResponseSampleTitle;
