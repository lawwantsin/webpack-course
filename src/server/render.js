import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router"
import Routes from "../components/Routes"
import { Provider} from "react-redux"
import store from "../store"

import { flushChunkNames } from "react-universal-component/server"
import flushChunks from "webpack-flush-chunks"

export default ({ clientStats }) => (req, res) => {
  const site = req.hostname.split(".")[0]
  const context = { site }

  const { js, styles, cssHash } = flushChunks(clientStats, {
    chunkNames: flushChunkNames().concat([`css/${site}-theme-css`])
  })

  res.send(`
    <html>
      <head>
        ${styles}
      </head>
      <body>
        <div id="react-root">${renderToString(
          <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
              <Routes />
            </StaticRouter>
          </Provider>
        )}</div>
        ${js}
      </body>
    </html>
  `)
}
