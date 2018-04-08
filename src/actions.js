import fetch from "cross-fetch"

export const fetchArticle = (site, slug) => (dispatch, getState) => {
  dispatch(fetchLoading(true))
  fetch(`https://${site}.hyblog.dev:8080/api/articles/${slug}`)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(fetchLoading(false))
      return response
    })
    .then(response => response.json())
    .then(items => dispatch(fetchSuccess(items)))
    .catch(err => dispatch(fetchError(err)))
}

const fetchLoading = status => {
  return {
    type: "FETCH_LOADING",
    payload: status
  }
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
