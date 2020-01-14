const tailwindcss = require("tailwindcss");
const atImport = require("postcss-easy-import");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-__:\/]+/g) || [];
  }
}

// The css setup uses TailwindCSS as a utility library (https://tailwindcss.com/#what-is-tailwind).
// We imports tailwind, then purge CSS classes that are not used
// See gatsby-config.js for details

module.exports = {
  plugins: [
    atImport,
    tailwindcss("./tailwind.js"),
    autoprefixer(),
    cssnano({
      preset: "default"
    })
  ]
};
