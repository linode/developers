import React from "react";
import Markdown from "react-markdown/with-html";

import Enum from "./Enum";

const SubResponse = props => {
  const { dataSource } = props;
  return (
    dataSource &&
    Object.keys(dataSource).map((value, index) => {
      const property = dataSource[value];
      return (
        property && (
          <div key={index} className="lg:flex mb-4">
            <div className="w-full lg:w-1/4">
              <b className={property.deprecated && "line-through"}>{value}</b>
              {property.x_linode_filterable && (
                <div className="leading-xs">
                  <span className="text-grey-dark text-sm">Filterable</span>
                </div>
              )}
            </div>
            <div className="w-full lg:w-3/4">
              <div>
                <div className="text-sm text-grey-darkest">
                  {property.type && property.type}{" "}
                  {property.pattern && (
                    <span className="tag">{property.pattern}</span>
                  )}
                </div>
                {property.enum && <Enum dataSource={property} />}
                {property.deprecated && (
                  <div>
                    <span className="tag tag-deprecated">Deprecated</span>
                  </div>
                )}
                <div>
                  <Markdown
                    source={property.description}
                    escapeHtml={false}
                    className="api-desc"
                  />
                </div>
              </div>
            </div>
          </div>
        )
      );
    })
  );
};

export default SubResponse;
