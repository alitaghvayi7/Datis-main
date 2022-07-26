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
    mode: "production",
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
            // {
            //     test: /\.js$/i,
            //     exclude: /node_modules/,
            //     use: ['babel-loader']
            // },
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
        new TerserPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            chunks: ["index"]
        }),
        new MiniCssExtractPlugin({
            filename: "css/style/[name][contenthash].css"
        }),
    ]
}