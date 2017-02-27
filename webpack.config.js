'use strict';
/*
 VENDOR
 */
const webpack = require('webpack');
const babel = require('babel-core');
const path = require('path');

/*
 OWN
 */
const debug = process.env.NODE_ENV !== 'production';
const NODE_ENV = process.env.NODE_ENV || 'development';

process.traceDeprecation = true;

module.exports = {
    context: __dirname,
    devtool: debug ? 'inline-sourcemaps' : false,
    entry: __dirname + '/src/main',
    output: {
        path: __dirname + '/dst',
        filename: 'build.js',
        // what module would be accessible from the global
        // library: []
    },
    watch: debug,
    watchOptions: {
        aggregateTimeout: 100
    },
    plugins: debug ? [new webpack.DefinePlugin({"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)})] : [
        new webpack.DefinePlugin({"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)}),
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
    module: {
        loaders: [
            {
                // "test" is commonly used to match the file extension
                test: /\.(js|jsx)$/,
                // "include" is commonly used to match the directories
                include: [
                    path.resolve(__dirname, "src")
                ],
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-runtime'],
                    babelrc: false,
                    cacheDirectory: true
                }
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
