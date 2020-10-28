const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const pug = {
  test: /\.pug$/,
  use: ['html-loader', 'pug-html-loader'],
};

const html = {
  test: /\.html$/,
  use: ['html-loader'],
};

const templates = {
  dir: {
    base: 'pug',
    folders: ['pages'],
  },
  get resolvedDirs() {
    return [
      this.dir.base,
      ...this.dir.folders.map((folder) => this.dir.base + '/' + folder),
    ]
      .map((dir) =>
        fs
          .readdirSync(path.resolve(__dirname, 'src', dir))
          .filter((file) => file.match(/\.pug$/))
          .map((file) => {
            let filename = file.substring(0, file.length - 4);
            const template = `${path.resolve(
              __dirname,
              'src',
              dir
            )}/${filename}.pug`;
            filename = `${dir.split(this.dir.base)[1]}/${filename}.html`;

            return new HtmlWebpackPlugin({
              template,
              filename: filename.substr(1, filename.length),
            });
          })
      )
      .flat();
  },
};

const config = {
  entry: {
    vendor: './src/js/vendor.js',
    emoji: './src/js/emoji.js',
    app: './src/js/app.js',
    index: './src/js/index.js',
  },
  module: {
    rules: [pug],
  },
  plugins: [
    ...templates.resolvedDirs,
    new HtmlWebpackPugPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: './src/assets/img',
          to: './assets/img',
        },
      ],
    }),
  ],
};

module.exports = config;
