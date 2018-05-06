import fetch from "cross-fetch"

export const fetchArticle = (site, slug) => async (dispatch, getState) => {
  try {
    const content = await fetch(
      `http://${site}.local:8080/api/articles/${slug}`
    )
    if (content.status == 200) {
      const json = await content.json()
      dispatch(fetchSuccess(json))
    } else {
      dispatch(fetchError(err))
    }
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
