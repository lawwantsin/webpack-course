import fetch from "cross-fetch"

export const fetchArticle = (site, slug) => async (dispatch, getState) => {
  if (!site || !slug) return
  try {
    const response = await fetch(
      `http://${site}.local:8080/api/articles/${slug}`
    )
    const items = await response.json()
    dispatch(fetchSuccess(items))
  } catch (err) {
    dispatch(fetchError(err))
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
