import React from "react";
import favicon from "./images/favicon.ico";

function HTML(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="robots" content="all,follow" />
        <meta name="googlebot" content="index,follow,snippet,archive" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {props.headComponents}
        <link rel="shortcut icon" href={favicon} />
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600"
          rel="stylesheet"
        />
      </head>
      <body>
        <div
          id="___gatsby"
          className="entry-point"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

export default HTML;
