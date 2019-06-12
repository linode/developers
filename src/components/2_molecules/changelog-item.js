import React from "react";
import PropTypes from "prop-types";

class ChangelogItem extends React.Component {
  componentDidMount() {
    const hash = document.location.hash;

    hash &&
      document.getElementById(hash.substr(1)) !== null &&
      window.setTimeout(
        () =>
          document
            .getElementById(hash.substr(1))
            .scrollIntoView({ block: "start", behavior: "smooth" }),
        50
      );
  }

  render() {
    const { title, date, version, changelog, html } = this.props;
    const productTitle =
      changelog.toString() === "Cloud Manager" ? "Cloud" : "API";
    const link = `${productTitle}-${version}`;
    return (
      <div
        className="flex flex-wrap"
        itemScope=""
        itemType="http://schema.org/CreativeWork"
      >
        <meta itemProp="author" content="Linode" />
        <div className="w-full md:w-1/4 py-2 md:p-6 md:text-right mt-1 flex items-center md:block">
          <div
            className="timeago mr-4 md:mr-0"
            dateTime=""
            itemProp="datePublished"
          >
            {date}
          </div>
          <div className="text-BaseBlue md:mt-3 flex md:block ">
            <span className="changelog-product" itemProp="name" />
            {changelog && changelog}
            {version && (
              <div className="text-BaseBlue ml-4 md:ml-0" itemProp="version">
                {version}
              </div>
            )}
          </div>
        </div>
        <div className="w-full md:w-3/4 py-2 md:p-6" id={link}>
          <h2
            className="mt-0 text-2xl font-normal"
            itemProp="alternativeHeadline"
          >
            {title}
          </h2>
          <div
            className="changelog-entry"
            itemProp="disambiguatingDescription"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    );
  }
}

ChangelogItem.propTypes = {
  title: PropTypes.string.isRequired
};

export default ChangelogItem;
