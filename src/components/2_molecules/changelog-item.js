import React from "react";
import PropTypes from "prop-types";

const ChangelogItem = ({ title, date, version, html }) => (
  <div className="flex flex-wrap">
    <div className="w-full md:w-1/4 py-2 md:p-6 md:text-right mt-1 flex items-center md:block">
      <div className="timeago mr-4 md:mr-0" dateTime="">
        {date}
      </div>
      <div className="text-BaseBlue md:mt-3 flex md:block ">
        <span className="changelog-product" />
        {version && <div className="text-BaseBlue ml-4 md:ml-0">{version}</div>}
      </div>
    </div>
    <div className="w-full md:w-3/4 py-2 md:p-6">
      <h2 className="mt-0 text-2xl font-normal">{title}</h2>
      <div
        className="changelog-entry"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  </div>
);

ChangelogItem.propTypes = {
  title: PropTypes.string.isRequired
};

export default ChangelogItem;
