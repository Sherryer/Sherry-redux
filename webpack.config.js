const webpack = require('webpack');
const cleanWebpackPlugin = require("clean-webpack-plugin");
const webpackManifestPlugin = require("webpack-manifest-plugin");


module.exports = {
    entry: {
        index : './src/app/index.js',
    },
    output: {
        path: __dirname,
        filename: './dist/[name].js'
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            // presets: ['react', 'stage-0', 'es2015']
                        }
                    }
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /(\.jpg$)/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: 'dist/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new cleanWebpackPlugin(['dist']),
        new webpackManifestPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]

};