const merge = require('webpack-merge');

const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin") 

const commonConfig = require('./webpack.common.config.js');

const publicConfig = {
    devtool: 'cheap-module-source-map',
    module: {
        rules: [{
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,  // replace ExtractTextPlugin.extract({..})
              "css-loader?modules&localIdentName=[local]-[hash:base64:5]",
              "postcss-loader"
            ]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist/*.*']),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new MiniCssExtractPlugin({
      　　filename: "[name].[chunkhash:8].css",
      　　 chunkFilename: "[id].css"
    　　 })
    ]
};

module.exports = merge(commonConfig, publicConfig);