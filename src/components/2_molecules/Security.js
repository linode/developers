import React from "react";

export const Security = props => {
  const { oauth } = props;
  return (
    <div className="flex items-start mt-4">
      <div className="w-1/4">
        <h3 className="mt-0">Authorizations</h3>
      </div>
      <div className="flex flex-col w-3/4">
        <div>personalAccessToken</div>
        <div>
          <span>oAuth: </span>(<span className="tag">{oauth}</span>)
        </div>
      </div>
    </div>
  );
};

export default Security;
