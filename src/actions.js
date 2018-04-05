import fetch from "cross-fetch"
export const REQUEST_ARTICLE = "REQUEST_ARTICLE"
export const RECEIVE_ARTICLE = "RECEIVE_ARTICLE"
const SERVER_ROOT = site => `https://${site}.hyblog.dev:8080`

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
    content,
    receivedAt: Date.now()
  }
}

export const fetchArticle = () => async (dispatch, getState, config) => {
  const { slug, site } = getState().article
  const content = await fetch(
    `https://${site}.hyblog.dev:8080/api/article/${slug}`
  )
  const json = await content.json()
  return dispatch(receiveArticle(json))
}
