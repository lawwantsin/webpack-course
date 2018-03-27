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

export const fetchArticle = () => (dispatch, getState, site) => {
  const slug = "taylor-swift"
  dispatch(requestArticle(slug))
  // const res = await fetch(`${SERVER_ROOT(site.site)}/api/article/${slug}`)
  fetch(`http://link.local:8080/api/article/${slug}`)
    .then(content => {
      content.json().then(json => {
        dispatch(receiveArticle(json))
      })
    })
    .catch(err => console.log(err))
}
