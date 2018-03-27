import { combineReducers } from "redux"
import { REQUEST_ARTICLE, RECEIVE_ARTICLE } from "./actions"

function article(
  state = {
    isFetching: false,
    didInvalidate: false,
    content: "",
    slug: ""
  },
  action
) {
  switch (action.type) {
    case REQUEST_ARTICLE:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
        slug: action.slug
      }
    case RECEIVE_ARTICLE:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        content: action.content,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  article
})

export default rootReducer
