const tailwindcss = require("tailwindcss");
const atImport = require("postcss-easy-import");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || [];
  }
}

module.exports = {
  plugins: [
    atImport,
    tailwindcss("./tailwind.js"),
    autoprefixer({
      browsers: ["last 2 versions", "> 2%"]
    }),
    cssnano({
      preset: "default"
    })
  ]
};
