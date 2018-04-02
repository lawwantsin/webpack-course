import fetch from "cross-fetch"
export const REQUEST_ARTICLE = "REQUEST_ARTICLE"
export const RECEIVE_ARTICLE = "RECEIVE_ARTICLE"
const SERVER_ROOT = site => `https://${site}.hyblog.dev:8080`

function requestArticle(slug, site) {
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

export const fetchArticle = () => async (dispatch, getState, site) => {
  const slug = site.slug
  dispatch(requestArticle(slug, site.site))
  const content = await fetch(
    `https://${site.site}.hyblog.dev:8080/api/article/${slug}`
  )
  const json = await content.json()
  dispatch(receiveArticle(json))
}
