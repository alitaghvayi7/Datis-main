const pathAbso = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: {
        "index": "./src/js/index.js",
    },
    output: {
        path: pathAbso.join(__dirname, "./build"),
        filename: "[name].[contenthash].js",
        assetModuleFilename: 'assets/[name][hash][ext]'
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(eot|woff|woff2)$/i,
                type: 'asset/inline'
            },

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            chunks: ["index"]
        }),
        new MiniCssExtractPlugin({
            filename: "css/style/[name][contenthash].css"
        }),
    ],
    devServer: {
        devMiddleware: {
            writeToDisk: true
        },
        static: {
            directory: pathAbso.join(__dirname, 'build'),
        },
        compress: true,
        port: 9000,
    },

}