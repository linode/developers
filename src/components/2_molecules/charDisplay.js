import React from "react";

export const CharDisplay = props => {
  const { data } = props;
  return (
    <>
      {data.format && (
        <>
          {"<"}
          {data.format}
          {">"}
        </>
      )}
      {data.type === "string" && data.maxLength && !data.minLength && (
        <span className="tag">{` <= ${data.maxLength}${" "} characters`}</span>
      )}
      {data.type === "string" &&
        data.maxLength &&
        data.minLength &&
        (data.maxLength === data.minLength ? (
          <span className="tag">{data.maxLength} characters</span>
        ) : (
          <span className="tag">
            {`${"["} ${data.minLength}${" .. "}${
              data.maxLength
            }${"] "} characters`}{" "}
          </span>
        ))}
    </>
  );
};

export default CharDisplay;
