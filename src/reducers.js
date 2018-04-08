export const fetchArticle = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        content: action.payload
      }
    case "FETCH_LOADING":
      return {
        ...state,
        loading: action.payload
      }
    case "FETCH_ERROR":
      return {
        ...state,
        response: action.payload
      }
    default:
      return state
  }
}
