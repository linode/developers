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
        <link id="theme__google-fonts-css" href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&family=Oswald:wght@300;400&display=swap" rel="stylesheet"></link>
        <script src="https://kit.fontawesome.com/07f951a406.js" crossOrigin="anonymous"></script>
        <script async="async" src="//consent.trustarc.com/notice?domain=linode.com&c=teconsent&js=nj&noticeType=bb&text=true&gtm=1" crossOrigin=""></script>
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
