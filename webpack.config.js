const { resolve } = require('path'); // node модуль для работы с путями
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/main.js', // точка входа для веб пака из коробки
    output:{
        path: resolve(__dirname,"build"), // 
        filename: 'main.[contenthash].js' // задаем файл где вебпак соберет приложение c хэшем, по умолчанию в dist
    },
    module:{
        rules: [
            {
                test: /\.(mp3)$/i,
                loader: 'file-loader',
                options:{
                    name: '[name].[ext]'
                }
            }
        ],
      
    },
    plugins:[
        new BundleAnalyzerPlugin(),
        new HtmlWebpackPlugin({
            template: resolve(__dirname,'index.html')
        })
    ]
};