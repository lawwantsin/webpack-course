import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router"
import Routes from "../components/Routes"

import { flushChunkNames } from "react-universal-component/server"
import flushChunks from "webpack-flush-chunks"

export default ({ clientStats }) => (req, res) => {
  const context = {}

  const app = renderToString(
    <StaticRouter location={req.originalUrl} context={context}>
      <Routes />
    </StaticRouter>
  )

  const { js, styles, cssHash } = flushChunks(clientStats, {
    chunkNames: flushChunkNames()
  })

  res.send(`
    <html>
      <head>
        ${styles}
      </head>
      <body>
        <div id="react-root">${app}</div>
        ${js}
        ${cssHash}
      </body>
    </html>
  `)
}
