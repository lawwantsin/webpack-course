const path = require("path")
const webpack = require("webpack")
const backboneFiles = require("../app/assets/javascripts/backbonejs/home.js")

module.exports = {
  context: path.resolve(__dirname, "../app/assets/javascripts"),
  entry: {
    backbone: ["webpack-dev-server/client?http://localhost:8080"]
    // canjs: ["./app/assets/javascripts/canjs/home.js"]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./public/js"),
    publicPath: "/js"
  },
  devtool: "source-map",
  devServer: {
    overlay: true,
    contentBase: "public",
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   use: [
      //     {
      //       loader: "val-loader"
      //     }
      //     // {
      //     //   loader: "imports-loader?this=>window"
      //     // }
      //   ]
      // }
    ]
  },
  resolve: {
    alias: {
      // $: "jquery",
      // Backbone: "backbone",
      // window: "window.jquery"
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      "windows.jQuery": "jquery"
      //   Backbone: path.resolve(
      //     __dirname,
      //     "../app/assets/javascripts/backbonejs/lib/backbone.js"
      //   ),
      //   _: path.resolve(
      //     __dirname,
      //     "../app/assets/javascripts/backbonejs/lib/underscore.js"
      //   ),
      // jquery: path.resolve(
      //   __dirname,
      //   "../app/assets/javascripts/jquery/jquery-1.9.1"
      // )
      //   $: path.resolve(
      //     __dirname,
      //     "../app/assets/javascripts/jquery/jquery-1.9.1"
      //   )
    })
  ]
}
