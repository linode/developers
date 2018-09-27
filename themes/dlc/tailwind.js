const config = require('../linode-hugo-theme/tailwind');

config.colors['l-green'] = 'pink'
config.colors['l-nav-grey'] = '#a6a6a6'
config.colors['l-full-black'] = '#000'
config.colors['d-header-green'] = '#2F9072'
config.colors['d-turq'] = '#346C8A'
config.colors['d-turq-hov'] = '#4B81D5'
config.colors['d-cell'] = '#EBEFF0'
config.colors['d-blue-light'] = '#EDF7FE'
config.colors['d-beige'] = '#ECECEC'

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
>>>>>>> fix child theme talwind config

  plugins: [
  ],

<<<<<<< HEAD
module.exports = {
  config,
  colors,
  borderWidths,
  padding
}
>>>>>>> attempting to set each set of vars as their own object to be exported
=======
  options: {
    prefix: '',
    important: false,
    separator: ':',
  },
}
>>>>>>> fix child theme talwind config
