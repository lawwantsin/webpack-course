import express from "express"
const server = express()
import path from "path"
import React from "react"
import ReactDOMServer from "react-dom/server"
import AppRoot from "../components/AppRoot"

const isProd = process.env.NODE_ENV === "production"
if (!isProd) {
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
}

const expressStaticGzip = require("express-static-gzip")
server.use(
  expressStaticGzip("dist", {
    enableBrotli: true
  })
)

server.get("*", (req, res) => {
  res.send(`
    <html>
      <head>
        <link href="main.css" rel="stylesheet" />
      </head>
      <body>
        <div id="react-root">
          ${ReactDOMServer.renderToString(<AppRoot />)}
        </div>
        <script src="vendor-bundle.js"></script>
        <script src="main-bundle.js"></script>
      </body>
    </html>
  `)
})

const PORT = process.env.PORT || 8080
server.listen(PORT, () => {
  console.log(
    `Server listening on http://localhost:${PORT} in ${process.env.NODE_ENV}`
  )
})
