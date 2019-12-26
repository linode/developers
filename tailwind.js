// We import the tailwind settings from the base theme
const config = require("./linode-hugo-theme/tailwind");

// We override (merge) or add specific settings to DLC
config.colors["ThemeCell"] = "#f4f4f4";
config.colors["ThemeBeige"] = "#eCeCeC";
config.colors["ThemeTagGrey"] = "#e1e8eC";
config.colors["ThemeTagGreyLight"] = "#fbfbfb";
config.colors["BaseGreenLight"] = "#f1f9f5";
config.colors["BaseRedLight"] = "#fdF1ef";
config.colors["white"] = "#fff";

config.borderWidths["5"] = "5px";

config.padding["10"] = "2.5rem";
config.padding["12"] = "3rem";
config.padding["16"] = "4rem";
config.padding["20"] = "5rem";

config.leading["xs"] = ".75";
config.leading["text-sm"] = "1.9";

config.maxWidth["3xl"] = "1296px";

module.exports = config;
