const path = require("path")

module.exports = {
  entry: {
    backbone: ["./app/assets/javascripts/backbonejs/home.js"]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../public/js"),
    publicPath: "/js"
  }
}
