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

module.exports = {
    context: __dirname,
    devtool: debug ? 'inline-sourcemaps' : false,
    entry: __dirname + '/src/main',
    output: {
        path: __dirname + '/dst',
        filename: 'build.js',
        library: "moduleA"
    },
    watch: debug,
    watchOptions: {
        aggregateTimeout: 100
    },
    plugins: debug ? [new webpack.DefinePlugin({"process.env": JSON.stringify(process.env)})] : [
        new webpack.DefinePlugin({"process.env": JSON.stringify(process.env)}),
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
        loaders: [{
            // "test" is commonly used to match the file extension
            test: /\.js$/,
            // "include" is commonly used to match the directories
            include: [
                path.resolve(__dirname, "src")
            ],
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015'],
                plugins: ['transform-runtime'],
                babelrc: false,
                cacheDirectory: true
            }
        }]
    }
}
