const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.join(__dirname, 'dist')
    },
    // watch: true,
    mode: 'development',
    devServer: {
        port: 9000,
        contentBase: path.resolve(__dirname, './dist'),
        hot: true
    },
    module: {
        rules: [    
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: 'file-loader',
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // title: '捡代码的小女孩的webpack世界',
            // filename: 'yeah.html',
            // meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
            // favicon: './src/imgs/favicon.ico',
            // scriptLoading: 'blocking',
            // minify: false
            template: path.join(__dirname, 'src/index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ]   
}