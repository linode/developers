/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const windowWidth = window.screen.width;
const transitionDelay = windowWidth <= 480 ? 0 : 50;

exports.shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (!location.hash || !document.getElementById(location.hash.substr(1))) {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay);
  } else {
    window.setTimeout(
      () =>
        document.getElementById(location.hash.substr(1)).scrollIntoView({
          block: "start",
          behavior: transitionDelay <= 480 ? "auto" : "smooth"
        }),
      transitionDelay
    );
  }
  return false;
};
