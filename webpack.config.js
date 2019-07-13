const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app.js',
        libraryTarget: 'umd',
        library: 'Kek'
    },
    resolve: {
        extensions: [
            '.webpack.js',
            '.web.js',
            '.ts',
            '.tsx',
            '.js'
        ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/typescript',
                        '@babel/preset-react'
                    ],
                    plugins: [
                        // This plugin transforms static class properties
                        // as well as properties declared with the property initializer syntax.
                        '@babel/proposal-class-properties',
                        // Compile object rest and spread to ES5.
                        '@babel/proposal-object-rest-spread',
                        // Compile function bind operator to ES5.
                        '@babel/plugin-proposal-function-bind',
                        // Treat React JSX elements as value types and hoist them to the highest scope.
                        'transform-react-constant-elements'
                    ]
                }
            }
        ]
    },
    optimization: {
        minimize: true,
        occurrenceOrder: true,
        mergeDuplicateChunks: true
    },
    plugins: [
        new webpack.optimize.AggressiveMergingPlugin()
    ]
};

