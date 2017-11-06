const path = require("path")
const webpack = require("webpack")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
var nodeExternals = require("webpack-node-externals")

module.exports = env => {
  return {
    target: "node",
    externals: nodeExternals(),
    entry: {
      server: ["./src/server/main.js"]
    },
    output: {
      filename: "[name]-bundle.js",
      path: path.resolve(__dirname, "../build")
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
              loader: "url-loader",
              options: {
                name: "images/[name].[ext]",
                limit: 1
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
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(env.NODE_ENV)
        }
      }),
      new webpack.NamedModulesPlugin()
    ]
  }
}
