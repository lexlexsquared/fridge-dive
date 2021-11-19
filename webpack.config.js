const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html", 
  filename: "./index.html",
});
module.exports = {
  entry: "./src/index.js",
  output: { 
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js"
  }, 
  mode: process.env.NODE_ENV, // 'production', 'development'
  plugins: [htmlPlugin],
  devServer: {
    static: {
      publicPath: '/dist',
    },
    compress: true,
    port: 8080,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader', // creates style nodes from JS strings
          {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader', // post process the compiled CSS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader",
        options: { name: '/static/[name].[ext]' }
      }
    ]
  }
};