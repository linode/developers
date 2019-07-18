import React from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

import ResponseSampleTitle from "../../components/2_molecules/ResponseSampleTitle";
import ResponseSampleBody from "../../components/2_molecules/ResponseSampleBody";

export const ResponseSamples = props => {
  const { responses, options, mode, m } = props;
  return (
    <>
      <h3>Response Samples</h3>
      <Tabs className="my-4">
        <TabList>
          {Object.keys(responses).map(
            (e, i) =>
              responses[options[e]] !== null && (
                <Tab key={i}>
                  <ResponseSampleTitle
                    response={options[e]}
                    r={responses[options[e]]}
                    className={
                      (options[e] === "_200" && "text-BaseGreen") ||
                      (options[e] === "default" && "text-BaseRed")
                    }
                  />
                </Tab>
              )
          )}
        </TabList>
        {Object.keys(responses).map((e, i) => {
          const response = responses[options[e]];
          return (
            response !== null && (
              <TabPanel key={i}>
                {(mode === "put" || mode === "post") && response["default"] ? (
                  <ResponseSampleBody
                    response={options[e]}
                    context={m.requestBody}
                    mode={mode}
                  />
                ) : (
                  <ResponseSampleBody
                    response={options[e]}
                    context={response}
                    error=""
                    mode={mode}
                  />
                )}
              </TabPanel>
            )
          );
        })}
      </Tabs>
    </>
  );
};

export default ResponseSamples;
