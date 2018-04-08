import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router"
import Routes from "../components/Routes"

import { flushChunkNames } from "react-universal-component/server"
import flushChunks from "webpack-flush-chunks"
import store from "../store"
import { Provider } from "react-redux"
import { actionTest } from "../actions"

export default ({ clientStats }) => (req, res) => {
  const site = req.headers.host.split(":")[0].split(".")[0]
  const context = { site }
  const names = flushChunkNames().concat([`css/${site}-theme-css`])

  const { js, styles, cssHash } = flushChunks(clientStats, {
    chunkNames: names
  })

  store.dispatch(actionTest("something"))

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
