import React from 'react';

export const ParamDisplay = (props) => {
  const { param } = props;
  return (
    <div className="mb-4">
      <div className="flex">
        <div className="w-1/4">
          <b>{param.name}</b>
        </div>
        <div className="w-3/4">
          <div>
            <div>
              {param.schema.type}{" "}
              {param.schema.type === "integer" &&
                param.schema.minimum &&
                !param.schema.maximum &&
                `${" > = "} ${param.schema.minimum}`}
              {param.schema.type === "integer" &&
                param.schema.minimum &&
                param.schema.maximum &&
                `${" ["} ${
                  param.schema.minimum
                }${" .. "}${param.schema.maximum}${"]"}`}
            </div>
            <div>Default: {param.schema.default}</div>
            <div>{param.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParamDisplay;