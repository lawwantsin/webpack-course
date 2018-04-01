import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router"
import Routes from "../components/Routes"

import { flushChunkNames } from "react-universal-component/server"
import flushChunks from "webpack-flush-chunks"

export default ({ clientStats }) => (req, res) => {
  const site = req.headers.host.split(":")[0].split(".")[0]
  const context = { site }
  const names = flushChunkNames().concat([`css/${site}-theme-css`])

  const { js, styles, cssHash } = flushChunks(clientStats, {
    chunkNames: names
  })

  res.send(`
    <html>
      <head>
        ${styles}
      </head>
      <body>
        <div id="react-root">${renderToString(
          <StaticRouter location={req.url} context={context}>
            <Routes />
          </StaticRouter>
        )}</div>
        ${js}
      </body>
    </html>
  `)
}
