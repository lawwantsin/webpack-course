import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { createLogger } from "redux-logger"
import reducers from "./reducers"
const loggerMiddleware = createLogger()

export function configureStore(preloadedState) {
  return createStore(
    reducers,
    preloadedState,
    applyMiddleware(thunk, loggerMiddleware)
  )
}
