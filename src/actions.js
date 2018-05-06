import fetch from "cross-fetch"

export const fetchArticle = (site, slug) => (dispatch, getState) => {
  if (!site || !slug) return
  fetch(`http://${site}.local:8080/api/articles/${slug}`)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response
    })
    .then(response => response.json())
    .then(items => dispatch(fetchSuccess(items)))
    .catch(err => dispatch(fetchError(err)))
}

const fetchSuccess = response => {
  return {
    type: "FETCH_SUCCESS",
    payload: response
  }
}

const fetchError = error => {
  return {
    type: "FETCH_ERROR",
    payload: error
  }
}
