import React from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

import ResponseSampleTitle from "../../components/2_molecules/ResponseSampleTitle";
import ResponseSampleBody from "../../components/2_molecules/ResponseSampleBody";

export const ResponseList = props => {
  const { responses, options } = props;
  return (
    <>
      <h3>Response Samples</h3>
      <Tabs className="my-4">
        <TabList>
          {Object.keys(responses).map((e, i) => (
            <Tab>
              <ResponseSampleTitle
                response={options[e]}
                r={responses[options[e]]}
                key={i}
              />
            </Tab>
          ))}
        </TabList>
        {Object.keys(responses).map((e, i) => (
          <TabPanel>
            <ResponseSampleBody
              response={options[e]}
              r={responses[options[e]]}
              key={i}
            />
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
};

export default ResponseList;
