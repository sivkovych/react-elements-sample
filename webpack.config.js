const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, './dist'),
        libraryTarget: "umd",
        library: 'Kek'
    },
    resolve: {
        extensions: [
            ".webpack.js",
            ".web.js",
            ".ts",
            ".tsx",
            ".js"
        ],
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat'
        }
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
                        // '@babel/plugin-transform-typescript',
                        "@babel/proposal-class-properties",
                        "@babel/proposal-object-rest-spread",
                        '@babel/plugin-proposal-function-bind',
                        'transform-react-remove-prop-types',
                        'transform-react-constant-elements'
                    ]
                }
            }
        ]
    },
    optimization: {
        minimize: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': "'production'"
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
    ]
};

