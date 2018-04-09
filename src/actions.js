import fetch from "cross-fetch"

export const fetchArticle = (site, slug) => async (dispatch, getState) => {
  try {
    dispatch(fetchLoading(true))
    const content = await fetch(
      `https://${site}.hyblog.dev:8080/api/articles/${slug}`
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
