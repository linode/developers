import React from "react";

export const ParamDisplay = props => {
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
                !param.schema.maximum && (
                  <span className="tag">> = {param.schema.minimum}</span>
                )}
              {param.schema.type === "integer" &&
                param.schema.minimum &&
                param.schema.maximum && (
                  <span className="tag">
                    [{param.schema.minimum}
                    {" .. "}
                    {param.schema.maximum}]
                  </span>
                )}
            </div>
            <div>
              Default:{" "}
              <span className="tag tag-light">{param.schema.default}</span>
            </div>
            <div>{param.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParamDisplay;
