import React from "react"
import express from "express"
const server = express()
import path from "path"
const expressStaticGzip = require("express-static-gzip")
import { renderToString } from "react-dom/server"

const isProd = process.env.NODE_ENV === "production"
const isDev = !isProd
if (isDev) {
  const webpack = require("webpack")
  const config = require("../../config/webpack.dev.js")
  const compiler = webpack(config)
  require("webpack-mild-compile")(compiler)

  const webpackDevMiddleware = require("webpack-dev-middleware")(
    compiler,
    config.devServer
  )

  const webpackHotMiddlware = require("webpack-hot-middleware")(
    compiler,
    config.devServer
  )

  server.use(webpackDevMiddleware)
  server.use(webpackHotMiddlware)
  console.log("Middleware enabled")
} else {
  const AppRoot = require("../components/AppRoot").default
  server.use(
    expressStaticGzip("dist", {
      enableBrotli: true
    })
  )
  server.use("*", (req, res) => {
    res.send(`
      <html>
        <head>
          <link href="/main.css" rel="stylesheet" />
        </head>
        <body>
          <div id="react-root">
            ${renderToString(<AppRoot />)}
          </div>
          <script src='vendor-bundle.js'></script>
          <script src='main-bundle.js'></script>
        </body>
      </html>
    `)
  })
}

const PORT = 8080
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
