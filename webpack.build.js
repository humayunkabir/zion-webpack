const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const { merge } = require('webpack-merge');
const config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'production',
  output: {
    filename: 'assets/js/[name].[contentHash].bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'assets/css/[name].[hash].css' }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/img/[name].[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin(),
      // new HtmlWebpackPlugin({
      //   template: './src/html/index.html',
      //   minify: {
      //     removeAttributeQuotes: true,
      //     removeTagWhitespace: true,
      //     collapseWhitespace: true,
      //     removeComments: true,
      //     removeRedundantAttributes: true,
      //     useShortDoctype: true,
      //   },
      // }),
    ],
  },
});
