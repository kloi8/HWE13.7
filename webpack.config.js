const webpack = require('webpack');
const path = require('path')
// const HtmlWebpackPlugin = require(html-webpuck-plugin);

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        static: './dist',
        hot: true,
        // copmress: true,
        port: 3001,
        open: true,
        // stats: {
        //     children: false
        //    }
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //  title: 'Development',
    // }),
    // ],
    output: {
        filename: 'test.js'
    },
    devtool: 'inline-source-map',
}