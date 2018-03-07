const path = require("path")
const webpack = require("webpack")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")
const CompressionPlugin = require("compression-webpack-plugin")
const BrotliPlugin = require("brotli-webpack-plugin")

module.exports = env => {
  return {
    entry: {
      main: ["./src/main.js"],
      main2: ["./src/main2.js"]
    },
    mode: "production",
    output: {
      filename: "[name]-bundle.js",
      path: path.resolve(__dirname, "../dist"),
      publicPath: "/"
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: "vendor",
            chunks: "initial",
            minChunks: 2
          }
        }
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
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: {
              loader: "css-loader",
              options: {
                minimize: true
              }
            }
          })
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
      new ExtractTextPlugin("[name].css"),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require("cssnano"),
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true
      }),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(env.NODE_ENV)
        }
      }),
      new HTMLWebpackPlugin({
        template: "./src/index.ejs",
        filename: "index.html",
        inject: true,
        title: "Link's Journal",
        chunks: ["vendor", "main"]
      }),
      // new HTMLWebpackPlugin({
      //   template: "./src/index.ejs",
      //   filename: "blog.html",
      //   inject: true,
      //   chunks: ["vendor", "main2"],
      //   title: "Blog"
      // }),
      new UglifyJSPlugin(),
      new CompressionPlugin({
        algorithm: "gzip"
      }),
      new BrotliPlugin()
    ]
  }
}
