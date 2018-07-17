import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router"
import Routes from "../components/Routes"

import { flushChunkNames } from "react-universal-component/server"
import flushChunks from "webpack-flush-chunks"
import configureStore from "../store"
import { Provider } from "react-redux"
import { fetchArticle } from "../actions"

export default ({ clientStats }) => (req, res) => {
  const site = req.hostname.split(".")[0]
  const slug = req.url.split("/").reverse()[0]

  const context = { site }

  const store = configureStore()
  store.dispatch(fetchArticle(site, slug))

  const app = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.originalUrl} context={context}>
        <Routes />
      </StaticRouter>
    </Provider>
  )

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
        <div id="react-root">${app}</div>
        ${js}
        ${cssHash}
      </body>
    </html>
  `)
}
