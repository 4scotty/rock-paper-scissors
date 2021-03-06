const path = require('path'),
    webpack = require('webpack'),
    autoprefixer = require('autoprefixer'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',

    entry: [
        '@babel/polyfill',
        path.resolve('./src/index')
    ],

    output: {
        filename: '[name].[hash].min.js',
        path: path.resolve('./docs'),
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(jpg|png|gif|mp3|aac|ogg)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader'
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                autoprefixer()
                            ]
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },

    resolve: {
        alias: {
            actions: path.resolve('./src/actions'),
            assets: path.resolve('./src/assets'),
            components: path.resolve('./src/components'),
            core: path.resolve('./src/core'),
            layouts: path.resolve('./src/layouts'),
            models: path.resolve('./src/models'),
            modules: path.resolve('./src/modules'),
            reducers: path.resolve('./src/reducers')
        },
        extensions: [
            '.js'
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('./src/assets/index.html'),
            favicon: path.resolve('./src/assets/favicon.png'),
            filename: path.resolve('./docs/index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        contentBase: path.resolve('./docs'),
        host: '0.0.0.0',
        port: 9000,
        publicPath: '/',
        compress: true,
        hot: true,
        historyApiFallback: true
    }
};
