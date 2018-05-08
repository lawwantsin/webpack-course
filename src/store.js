import { createStore } from "redux"
import { testReducer } from "./reducers"

const enhancer = typeof window == "object" && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default createStore(testReducer, enhancer)
