const path = require("path")
const webpack = require("webpack")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")
const CompressionPlugin = require("compression-webpack-plugin")
const BrotliPlugin = require("brotli-webpack-plugin")
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin")

module.exports = {
  name: "client",
  entry: {
    vendor: ["react", "lodash"],
    main: ["./src/main.js"]
  },
  output: {
    filename: "[name]-bundle.js",
    chunkFilename: "[name].js",
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
        use: ExtractCssChunks.extract({
          use: {
            loader: "css-loader"
          }
        })
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "images/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "markdown-with-front-matter-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractCssChunks(),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
        WEBPACK: true
      }
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: ["bootstrap"],
      filename: "[name].js",
      minChunks: Infinity
    }),
    new UglifyJSPlugin(),
    new CompressionPlugin({
      algorithm: "gzip"
    }),
    new BrotliPlugin()
  ]
}
