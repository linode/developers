import React from "react";

const Enum = props => {
  const { dataSource } = props;
  return (
    <div className="flex flex-wrap mb-2">
      <span className="text-sm mr-1">Enum: </span>
      {dataSource.enum.map((value, index) => {
        return (
          <span className="tag mr-2 mb-1 inline-block" key={index}>
            "{value}"
          </span>
        );
      })}
    </div>
  );
};

export default Enum;
