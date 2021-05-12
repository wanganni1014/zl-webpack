const path = require('path');
const webpack = require('webpack');

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
        new webpack.HotModuleReplacementPlugin()
    ]   
}