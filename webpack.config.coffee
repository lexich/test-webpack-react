path = require("path")
webpack = require("webpack")
ExtractTextPlugin = require("extract-text-webpack-plugin")
HtmlWebpackPlugin = require("html-webpack-plugin")
WebpackErrorNotificationPlugin = require('webpack-error-notification')
fs = require("fs")
module.exports =
  entry: "./app/app"
  context: __dirname
  output:
    path: path.join(__dirname,"dist")
    filename: "client.[hash].js"

  module:
    loaders: [
        test: /\.css$/
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      ,
        test: /\.coffee$/
        loader: "coffee-loader"
      ,
        test: /\.(png|jpg)$/
        loader: "url-loader?limit=8192"
      ,
        test: /\.jsx$/
        loaders: [
          "react-hot"
          "jsx"
        ]
      ,
        test: /\.(scss|sass)$/
        loader: ExtractTextPlugin.extract(
          "style!css!sass?outputStyle=expanded&" + "includePaths[]=" + (path.resolve(__dirname, "./bower_components")) + "&" + "includePaths[]=" + (path.resolve(__dirname, "./node_modules")), "css-loader"
        )
    ]

  resolve:
    root: [path.join(__dirname, "bower_components")]
    extensions: [ "", ".js", ".jsx", ".coffee" ]

  devtool: "source-map"
  plugins: [
    new WebpackErrorNotificationPlugin(),
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    ),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("styles.[hash].css",
      allChunks: true
    ),
    #problem with server in gulp task
    new HtmlWebpackPlugin(
      title: "My app"
      template: "./app/template.html"
    )
  ]
