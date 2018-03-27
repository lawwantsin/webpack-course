import fetch from "cross-fetch"
export const REQUEST_ARTICLE = "REQUEST_ARTICLE"
export const RECEIVE_ARTICLE = "RECEIVE_ARTICLE"
const SERVER_ROOT = site => `http://${site}.local:8080`

function requestArticle(slug) {
  return {
    type: REQUEST_ARTICLE,
    slug
  }
}
function receiveArticle(content) {
  return {
    type: RECEIVE_ARTICLE,
    content,
    receivedAt: Date.now()
  }
}

export const fetchArticle = () => async (dispatch, getState, site) => {
  const slug = site.slug
  dispatch(requestArticle(slug))
  const content = await fetch(`http://link.local:8080/api/article/${slug}`)
  const json = await content.json()
  dispatch(receiveArticle(json))
}
