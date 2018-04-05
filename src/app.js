import React from "react"
import ReactDOM from "react-dom"
import AppRoot from "./components/AppRoot"
import { AppContainer } from "react-hot-loader"
import { configureStore } from "./store"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { syncHistoryWithStore } from "react-router-redux"
import thunk from "redux-thunk"
import reducers from "./reducers"

// const context = {
//   site: location.hostname.split(".")[0],
//   slug: location.pathname.split("/").reverse()[0]
// }
//

const context = {}

const preloadedState = {}
const store = configureStore(preloadedState, context)

function render(Component) {
  ReactDOM.hydrate(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById("react-root")
  )
}
render(AppRoot)

if (module.hot) {
  module.hot.accept("./components/AppRoot.js", () => {
    const NewAppRoot = require("./components/AppRoot.js").default
    render(NewAppRoot)
  })
}
