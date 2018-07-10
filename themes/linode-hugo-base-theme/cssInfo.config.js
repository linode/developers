const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const PATHS = {
  src: path.join(__dirname, 'layouts')
}

module.exports = {
  output: {
    path: path.resolve(__dirname, 'static/assets/css/info'),
    filename: 'info.css',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options:
              {
                importLoaders: 1,
                minimize: true
              } 
            },
            'postcss-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('info.css'),
  ]
}
