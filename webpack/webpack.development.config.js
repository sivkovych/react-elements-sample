const webpack = require('webpack');
const path = require('path');

const DEV_FILE_NAME = 'form.dev.js';
const DEV_MAP_NAME = 'form.dev.map';
const PROJECT_BUILD_PATH = path.resolve(__dirname, '../target');

module.exports = {
    mode: 'development',
    entry: ['./src/index.tsx'],
    devtool: 'inline-source-map',
    devServer: {
        port: 8083,
        contentBase: PROJECT_BUILD_PATH,
        watchContentBase: true,
        liveReload: true,
        watchOptions: {
            poll: true
        }
    },
    output: {
        path: PROJECT_BUILD_PATH,
        pathinfo: true,
        filename: DEV_FILE_NAME,
        sourceMapFilename: DEV_MAP_NAME,
        library: 'Form',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    resolve: {
        extensions: [
            '.ts',
            '.tsx',
            '.json',
            '.js'
        ]
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "source-map-loader"
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loaders: 'awesome-typescript-loader'
            }
        ]
    },
    optimization: {
        namedModules: true,
        namedChunks: true,
        nodeEnv: 'development',
        flagIncludedChunks: false,
        occurrenceOrder: false,
        sideEffects: false,
        usedExports: false,
        concatenateModules: false,
        splitChunks: {
            hidePathInfo: false,
            minSize: 10000,
            maxAsyncRequests: Infinity,
            maxInitialRequests: Infinity,
        },
        noEmitOnErrors: false,
        checkWasmTypes: false,
        minimize: true,
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.NamedChunksPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development")
        }),
    ]
};

