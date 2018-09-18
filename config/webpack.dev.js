const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      { 
        use: [ 
          { loader: 'style-loader' }, 
          { 
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]___[hash:base64:5]"
            }
          } 
        ], 
        test: /\.css$/ 
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    port: 3000,
  }
})