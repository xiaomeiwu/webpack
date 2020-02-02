const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    target: 'web',
    mode: 'development',
    entry: {
        main: './src/main.js'
    },
    output: {
        filename: '[name][hash].js',
        path: path.resolve(__dirname, './build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            title: 'webpack-dev-server'
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        port: 8080,
        host: '0.0.0.0',
        proxy: {
            "/api": {
                target: "http://localhost:3000",
                pathRewrite: {
                    "^/api": "/proxy/api"
                }
            }
        }
    }