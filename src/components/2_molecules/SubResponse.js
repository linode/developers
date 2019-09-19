import React from "react";
import Markdown from "react-markdown/with-html";

import Deprecated from "./Deprecated";
import Enum from "./Enum";
import Filterable from "./Filterable";
import Nullable from "./Nullable";

const SubResponseMarkup = props => {
  const { property, value } = props;
  return (
    <>
      <div className="w-full lg:w-1/4">
        <b className={property.deprecated && "line-through"}>{value}</b>
        {property.x_linode_filterable && <Filterable />}
        {property.nullable && <Nullable />}
      </div>
      <div className="w-full lg:w-3/4">
        <div>
          {}
          <div className="text-sm text-grey-darkest">
            {property.type && property.type}{" "}
            {property.pattern && (
              <span className="tag">{property.pattern}</span>
            )}
          </div>
          {property.enum && <Enum dataSource={property} />}
          {property.deprecated && <Deprecated />}
          <div>
            <Markdown
              source={property.description}
              escapeHtml={false}
              className="api-desc"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const SubResponse = props => {
  const { dataSource, allOfSource } = props;
  return (
    dataSource &&
    Object.keys(dataSource).map((value, index) => {
      const property = dataSource[value];
      return (
        property && (
          <React.Fragment key={index}>
            <div className="lg:flex mb-4">
              {allOfSource &&
                allOfSource.map(e =>
                  Object.keys(e.properties).map(v => console.log(v))
                )}
              <SubResponseMarkup property={property} value={value} />
            </div>
            {property.properties && (
              <div className="px-4 mt-4 mb-4 ml-4 subResponse">
                {Object.keys(property.properties).map((v, i) => {
                  const property2 = property.properties[v];
                  return (
                    <div key={i} className="lg:flex mb-4">
                      <SubResponseMarkup property={property2} value={v} />
                    </div>
                  );
                })}
              </div>
            )}
          </React.Fragment>
        )
      );
    })
  );
};

export default SubResponse;
