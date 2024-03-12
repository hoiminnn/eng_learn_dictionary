const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    
    entry: {
        "index": './src/index.js',
        "word" : './src/word.js',
    } ,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'), 
    },

    module: {

      rules: [

        {
            test: /\.html$/,
            loader: 'html-loader',
          },
        
          {
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
          }
        },
        {
            test: /\.css$/,
            use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            }
      ],
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: 'src/word.html',
            filename: './word.html',
            chunks: ["word"],
            inject: true
          }),
        new HtmlWebPackPlugin({
            template: 'src/index.html',
            filename: './index.html',
            chunks: ["index"],
            inject: true
          }),
        new MiniCssExtractPlugin({
            filename: './css/style.css',
          })
    ],

    resolve: {
      extensions: ['.js', '.jsx', '.css'],  // .jsxも省略可能対象にする
    },
    
  };