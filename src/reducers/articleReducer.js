import {
  REQUEST_ARTICLE,
  RECEIVE_ARTICLE,
  ERROR_RECEIVING_ARTICLE
} from "../actions/articleActions"

const initState = {
  content: "",
  slug: "",
  site: ""
}

export default (state = initState, action) => {
  switch (action.type) {
    case REQUEST_ARTICLE:
      return {
        ...state,
        slug: action.slug,
        site: action.site
      }
    case RECEIVE_ARTICLE:
      return {
        ...state,
        content: action.content
      }
    case ERROR_RECEIVING_ARTICLE:
      return {
        ...state,
        content: "Not Found"
      }
    default:
      return state
  }
}
