const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true,
        devMiddleware: {
            stats: {
                children: false,
                maxModules: 0,
            },
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:3010',
        //         pathRewrite: { '^/api': '' },
        //     },
        // },
        },
    }
});