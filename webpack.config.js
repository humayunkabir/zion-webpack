const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// const pug = {
//     test: /\.pug$/,
//     use: ['html-loader', 'pug-plain-loader'],
// };

const pug =  {
    test: /\.pug$/,
    use: {
        loader: 'pug-loader',
        options: {
            pretty: true
        }
    }
}
const jsRule =   {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: [ '@babel/env' ],
            plugins: [ '@babel/plugin-proposal-class-properties',"@babel/plugin-transform-runtime" ]
        }
    }
}

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
                            chunks: ['app'],
                            template,
                            filename: filename.substr(1, filename.length),
                            inject: true
                        });
                    })
            )
            .flat();
    },
};

module.exports = {
    entry: {
        vendor: './src/js/vendor.js',
        emoji: './src/js/emoji.js',
        app: ['./src/js/app.js','./src/scss/app.scss'],
        index: './src/js/index.js',
    },
    module: {
        rules: [pug, jsRule]
    },


    plugins: [
        new CleanWebpackPlugin(),
        ...templates.resolvedDirs,
        // new HtmlWebpackPugPlugin({
        //     inject: false
        // }),
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

