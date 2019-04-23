import React from "react";

export const Security = props => {
  const { oauth } = props;
  return (
    <div class="flex items-start mt-4">
      <div className="mr-4">
        <b>Authorizations:</b>
      </div>
      <div class="flex flex-col">
        <div>personalAccessToken</div>
        <div>
          <span>oAuth: </span>(<span className="tag">{oauth}</span>)
        </div>
      </div>
    </div>
  );
};

export default Security;
