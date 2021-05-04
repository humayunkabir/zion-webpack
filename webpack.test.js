const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PugWebpackPlugin = require('pug-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// const pug = {
//     test: /\.pug$/,
//     use: ['html-loader', 'pug-plain-loader'],
// };

const pug = {
  test: /\.pug$/,
  // use:  ['html-loader', 'pug-html-loader?pretty&exports=false'],
  use: {
    loader: 'pug-loader',
    options: {
      pretty: true,
    },
  },
};

const html = {
  test: /\.html$/,
  use: ['html-loader'],
};

const locals = {
  name: 'Test',
  toLowerCase: (string) => string.toLowerCase(),
};

const templates = {
  dir: {
    base: 'pug',
    folders: ['pages'],
  },
  get resolvedDirs() {
    const pugs = [
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

            return new PugWebpackPlugin({
              template,
              path: path.resolve(
                __dirname,
                `dist/${dir.split(this.dir.base)[1]}`
              ),
              options: {
                filename: `${filename}.html`,
                pretty: true,
              },
              locals,
            });
          })
      )
      .flat();
    console.log('pugs', pugs.length);
    return pugs;
  },
};

module.exports = {
  mode: 'development',
  entry: {
    index: './src/pug/index.pug',
  },
  module: {
    rules: [pug],
  },

  plugins: [
    // new CleanWebpackPlugin(),
    ...templates.resolvedDirs,
    // new PugWebpackPlugin({
    //   template: `${path.resolve(__dirname, 'src', 'pug')}/**/*.pug`,
    // }),
  ],
};
