const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob');
const path = require('path');

const PATHS = {
  src: path.join(__dirname, 'layouts')
}

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'static/assets/css'),
    filename: 'main.css',
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
    new ExtractTextPlugin('main.css'),
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true })
    })
  ]
}
