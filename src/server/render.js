import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router"
import Routes from "../components/Routes"

import { Provider } from "react-redux"

import { configureStore } from "../store"

import { flushChunkNames } from "react-universal-component/server"
import flushChunks from "webpack-flush-chunks"

const preloadedState = {}
const store = configureStore(preloadedState)

export default ({ clientStats }) => (req, res) => {
  const { js, styles, cssHash } = flushChunks(clientStats, {
    chunkNames: flushChunkNames()
  })

  const site = req.headers.host.split(":")[0].split(".")[0]
  const context = { site }

  const preloadedState = store.getState()

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
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            "\\x3c"
          )}
        </script>
      ${js}
      </body>
    </html>
  `)
}
