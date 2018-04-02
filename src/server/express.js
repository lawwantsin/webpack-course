import express from "express"
let server = express()
import path from "path"
const expressStaticGzip = require("express-static-gzip")
import webpack from "webpack"
import webpackHotServerMiddleware from "webpack-hot-server-middleware"
import fs from "fs"
import https from "https"

import configDevClient from "../../config/webpack.dev-client.js"
import configDevServer from "../../config/webpack.dev-server.js"
import configProdClient from "../../config/webpack.prod-client.js"
import configProdServer from "../../config/webpack.prod-server.js"

import marked from "marked"
const yaml = require("yaml-front-matter")

const httpsOptions = {
  key: fs.readFileSync("./config/ssl/*.hyblog.dev.key"),
  cert: fs.readFileSync("./config/ssl/*.hyblog.dev.crt")
}

const isProd = process.env.NODE_ENV === "production"
const isDev = !isProd
const PORT = process.env.PORT || 8080
let isBuilt = false

const done = () => {
  if (isBuilt) return
  server = https.createServer(httpsOptions, server)
  server.listen(PORT, () => {
    isBuilt = true
    console.log(
      `Server listening on https://link.hyblog.dev:${PORT} in ${
        process.env.NODE_ENV
      }`
    )
  })
}
server.get("/favicon.ico", function(req, res) {
  res.status(204)
})
server.get("/api/article/:slug", (req, res, next) => {
  const site = req.headers.host.split(":")[0].split(".")[0]
  const { slug } = req.params
  const file = path.resolve(__dirname, `../../data/${site}/${slug}.md`)
  fs.readFile(file, "utf8", function(err, data) {
    const obj = yaml.loadFront(data)
    obj.__content = marked(obj.__content)
    res.json(obj)
  })
})

if (isDev) {
  const compiler = webpack([configDevClient, configDevServer])

  const clientCompiler = compiler.compilers[0]
  const serverCompiler = compiler.compilers[1]

  const webpackDevMiddleware = require("webpack-dev-middleware")(
    compiler,
    configDevClient.devServer
  )

  const webpackHotMiddlware = require("webpack-hot-middleware")(
    clientCompiler,
    configDevClient.devServer
  )

  server.use(webpackDevMiddleware)
  server.use(webpackHotMiddlware)
  server.use(webpackHotServerMiddleware(compiler))
  console.log("Middleware enabled")
  done()
} else {
  webpack([configProdClient, configProdServer]).run((err, stats) => {
    const clientStats = stats.toJson().children[0]
    const render = require("../../build/prod-server-bundle.js").default
    console.log(
      stats.toString({
        colors: true
      })
    )
    server.use(
      expressStaticGzip("dist", {
        enableBrotli: true
      })
    )
    server.use(render({ clientStats }))
    done()
  })
}
