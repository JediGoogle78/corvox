'use strict';
/*
 VENDOR
 */
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/*
 OWN
 */
const devServerConfig = require('./config/dev-server.json');
const NODE_ENV = process.env.NODE_ENV || 'development';
const debug = NODE_ENV === 'development';

process.traceDeprecation = true;

console.log(`Webpack's environment is \x1b[34m${NODE_ENV}\x1b[0m`);

module.exports = {
    context: __dirname,
    devtool: debug ? 'inline-sourcemaps' : false,
    entry: __dirname + '/app/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'main.js',
        publicPath: "/public/",
    },
    watch: false,
    devServer: {
        host: devServerConfig.host,
        port: devServerConfig.port,
        contentBase: path.join(__dirname, "./")
    },
    recordsPath: path.resolve(`${devServerConfig.host}:${devServerConfig.port}/webpack.records.json`),
    plugins: debug ?
        [
            new webpack.DefinePlugin({
                "process.env": {
                    "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
                }
            }),
            new ExtractTextPlugin({
                filename: 'public/main.css',
                allChunks: true
            })
        ] :
        [
            new webpack.DefinePlugin({
                "process.env": {
                    "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                mangle: false,
                sourcemaps: false,
                compress: {
                    warnings: false,
                    drop_console: true,
                    unsafe: true
                }
            })
        ],
    // pathes where to search modules
    resolve: {
        /*
         If you want to add a directory to search in that takes precedences over node_modules/:

         So... ./src has higher prio than node_modules
         */
        modules: [path.resolve(__dirname, "src"), "node_modules"],
        extensions: ['.js']
    },
    // pathes where to search Loaders
    resolveLoader: {
        modules: ["web_loaders", "web_modules", "node_loaders", "node_modules"],
        extensions: [".webpack-loader.js", ".web-loader.js", ".loader.js", ".js"]
    },
    loader: {
        sassLoader: {
            includePaths: ['node_modules']
        }
    },
    module: {
        rules: [
            {
                // "test" is commonly used to match the file extension
                test: /\.(js|jsx)$/,
                // "include" is commonly used to match the directories
                include: [
                    path.resolve(__dirname, "app")
                ],
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react', 'react-hmre'],
                    plugins: ['transform-runtime', 'syntax-dynamic-import'],
                    babelrc: false,
                    cacheDirectory: true
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true
                    }
                }]
            },
            // this loader expose React to the global scope (only after requiring it)
            {
                test: require.resolve("react"), loader: "expose-loader?React"
            },
            // same for ReactDOM
            {
                test: require.resolve("react-dom"), loader: "expose-loader?ReactDOM"
            }
        ]
    }
};
