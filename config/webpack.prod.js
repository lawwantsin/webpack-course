const path = require("path")
const webpack = require("webpack")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const isProd = process.env.NODE_ENV === "production"
const MiniCSSExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")

module.exports = {
  entry: {
    main: ["./src/main.js"]
  },
  mode: "production",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "dist",
    overlay: true,
    stats: {
      colors: true
    }
  },
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
        test: /\.css$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          {
            loader: "css-loader"
          }
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
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new OptimizeCssAssetsPlugin(),
    new MiniCSSExtractPlugin({
      filename: "[name]-[contenthash].css"
    }),
    new HTMLWebpackPlugin({
      template: "./src/index.ejs",
      title: "Link's Journal"
    })
  ]
}
