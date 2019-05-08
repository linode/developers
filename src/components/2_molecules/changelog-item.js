import React from "react";
import PropTypes from "prop-types";

const ChangelogItem = ({ title, date, version, html }) => (
  <div
    className="flex flex-wrap"
    itemscope=""
    itemtype="http://schema.org/CreativeWork"
  >
    <meta itemprop="author" content="Linode" />
    <div className="w-full md:w-1/4 py-2 md:p-6 md:text-right mt-1 flex items-center md:block">
      <div
        className="timeago mr-4 md:mr-0"
        dateTime=""
        itemprop="datePublished"
      >
        {date}
      </div>
      <div className="text-BaseBlue md:mt-3 flex md:block ">
        <span className="changelog-product" itemprop="name" />
        {version && (
          <div className="text-BaseBlue ml-4 md:ml-0" itemprop="version">
            {version}
          </div>
        )}
      </div>
    </div>
    <div className="w-full md:w-3/4 py-2 md:p-6">
      <h2 className="mt-0 text-2xl font-normal" itemprop="alternativeHeadline">
        {title}
      </h2>
      <div
        className="changelog-entry"
        itemprop="disambiguatingDescription"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  </div>
);

ChangelogItem.propTypes = {
  title: PropTypes.string.isRequired
};

export default ChangelogItem;
