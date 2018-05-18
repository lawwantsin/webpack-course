import fetch from "cross-fetch"

export const fetchArticle = (site, slug) => async (dispatch, getState) => {
  if (!site || !slug) return
  const response = await fetch(
    `http://${site}.local:8080/api/articles/${slug}`
  ).then(response => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response
  })
  if (response.status == 200) {
    const json = await response.json()
    dispatch(fetchSuccess(json))
  } else {
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
