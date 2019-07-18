import React from "react";

const CodeBox = ({ line1, line2, line3, line4, line5 }) => (
  <div className="code-box bg-ThemeBeige rounded md:my-8 mx-auto">
    <div className="code-box-header border-white flex justify-start py-4 px-6">
      <span className="code-box-circle circle-red" />
      <span className="code-box-circle circle-yellow" />
      <span className="code-box-circle circle-green" />
    </div>
    <div className="code-box-content py-4 px-6">
      <pre>{line1}</pre>
      <pre>{line2}</pre>
      <pre>{line3}</pre>
      <pre>{line4}</pre>
      <pre>{line5}</pre>
    </div>
  </div>
);

export default CodeBox;
