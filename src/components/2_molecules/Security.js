import React from 'react';

export const Security = (props) => {
  const { oauth } = props;
  return (
    <>
      <div className="mt-4">
        <b>Authorizations</b>
      </div>
      <div>personalAccessToken</div>
      <div>
        <span>oAuth:</span>
        <span>({ oauth })</span>
      </div>
    </>
  )
}