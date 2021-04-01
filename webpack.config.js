const path= require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports ={
    entry: './src',
  output: {
      path: path.join(__dirname,'/dist'),
      filename: './bundle.js'
  },
  module: {
      rules: [{
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
      },{
        test: /\.(css|sass)$/,
        use: ['style-loader','css-loader'],
    },{
        test: /\.(jpe?g|png|gif)$/,
        use: [{loader: 'file-loader',options: {Plugin: ['lodash']}}],
    }]
  },
  devServer:    {
      historyApiFallback: true,
  },
  plugins: [
      new HtmlWebpackPlugin({
          title: 'Production',
          template: './public/index.html'
      }),
      new CaseSensitivePathsPlugin(),
  ]
}