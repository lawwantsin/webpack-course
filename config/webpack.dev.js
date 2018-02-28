const path = require("path")
const webpack = require("webpack")
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    main: ["./src/main.js"],
    angular: "./src/angular.ts",
    polyfills: "./src/angular-polyfills.ts"
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "dist",
    overlay: true,
    historyApiFallback: true,
    stats: {
      colors: true
    }
  },
  resolve: {
    extensions: [".js", ".ts"]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/
        // options: {
        //   configFile: path.join(__dirname, "./config/tsconfig.json")
        // }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              attrs: ["img:src"]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core/,
      path.join(__dirname, "./src"),
      {}
    ),
    new HTMLWebpackPlugin({
      template: "./src/index.html"
    })
  ]
}
