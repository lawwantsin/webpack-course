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
  const names = flushChunkNames().concat([`css/${site}-theme-css`])

  const { js, styles } = flushChunks(clientStats, {
    chunkNames: names
  })

  const store = configureStore()

  const loadArticle = (site, slug) => {
    return store.dispatch(fetchArticle(site, slug))
  }

  const template = () => `
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
        <script>
          window.INITIAL_STATE = ${JSON.stringify(store.getState())}
        </script>
      </body>
    </html>
  `

  if (req.path.match(/^\/article\//)) {
    const promise = loadArticle(site, slug)
    promise.then(_ => {
      res.send(template())
    })
  } else {
    res.send(template())
  }
}
