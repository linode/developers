import React from "react";
import PropTypes from "prop-types";

const Banner = ({ title, subtitle }) => (
  <div className="banner__wrapper triangle-bg relative z-0">
    <header className="banner max-w-3xl mx-auto px-4 py-8 text-white">
      <div className="text-4xl leading-none font-semibold"><h1>{title}</h1></div>
      <div className="text-3xl leading-none font-light mt-2">{subtitle}</div>
    </header>
  </div>
);

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default Banner;
