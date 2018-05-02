const path = require("path")
const webpack = require("webpack")
var nodeExternals = require("webpack-node-externals")

module.exports = env => {
  return {
    name: "server",
    target: "node",
    externals: nodeExternals(),
    entry: {
      server: ["./src/server/main.js"]
    },
    mode: "production",
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
          use: "css-loader"
        },
        {
          test: /\.jpg$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "images/[name].[ext]",
                emitFile: false
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
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(env.NODE_ENV)
        }
      })
    ]
  }
}
