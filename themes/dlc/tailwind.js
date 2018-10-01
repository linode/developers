const config = require('../linode-hugo-theme/tailwind');

config.colors['ThemeCell'] = '#EBEFF0';
config.colors['ThemeBeige'] = '#ECECEC';

config.borderWidths['5'] = '5px'

config.padding['10'] = '2.5rem'
config.padding['12'] = '3rem'
config.padding['20'] = '5rem'

module.exports = {
  colors: config.colors,
  screens: config.screens,
  fonts: config.fonts,
  textSizes: config.textSizes,
  fontWeights: config.fontWeights,
  leading: config.leading,
  tracking: config.tracking,
  textColors: config.colors,
  backgroundColors: config.colors,
  backgroundSize: config.backgroundSize,
  borderWidths: config.borderWidths,
  borderColors: global.Object.assign({ default: config.colors['grey-light'] }, config.colors),
  borderRadius: config.borderRadius,
  width: config.width,
  height: config.height,
  minWidth: config.minWidth,
  minHeight: config.minHeight,
  maxWidth: config.maxWidth,
  maxHeight: config.maxHeight,
  padding: config.padding,
  margin: config.margin,
  negativeMargin: config.negativeMargin,
  shadows: config.shadows,
  zIndex: config.zIndex,
  opacity: config.opacity,
  svgFill: config.svgFill,
  svgStroke: config.svgStroke,

  plugins: [
  ],

  options: {
    prefix: '',
    important: false,
    separator: ':',
  },
}