import fetch from "cross-fetch"
export const REQUEST_ARTICLE = "REQUEST_ARTICLE"
export const RECEIVE_ARTICLE = "RECEIVE_ARTICLE"
export const ERROR_RECEIVING_ARTICLE = "ERROR_RECEIVING_ARTICLE"

export function requestArticle(slug, site) {
  return {
    type: REQUEST_ARTICLE,
    slug,
    site
  }
}
function receiveArticle(content) {
  return {
    type: RECEIVE_ARTICLE,
    content
  }
}

function errorReceivingArticle(content) {
  return {
    type: ERROR_RECEIVING_ARTICLE,
    content
  }
}

export const fetchArticle = () => async (dispatch, getState, config) => {
  try {
    const { slug, site } = getState().article
    const SERVER_ROOT = `https://${site}.hyblog.dev:8080`
    const content = await fetch(`${SERVER_ROOT}/api/article/${slug}`)
    if (content.status == 200) {
      const json = await content.json()
      dispatch(receiveArticle(json))
    } else {
      dispatch(errorReceivingArticle())
    }
  } catch (err) {
    debugger
  }
}
