import React from "react"
import "../css/Article.css"
import NotFound from "./NotFound"

export default props => {
  const siteConfig = require(`../../data/${props.site}/siteConfig.js`)
  const imagePath = require(`../images/${siteConfig.aboutImage}`)
  require(`../css/${props.site}/theme.css`)
  try {
    const MarkdownData = require(`../../data/${props.site}/${
      props.match.params.slug
    }.md`)

    const posterStyle = {
      backgroundImage: `url(${MarkdownData.posterImage})`
    }

    return (
      <div>
        <div className="Article">
          <div className="poster" style={posterStyle} />
          <h1>{MarkdownData.title}</h1>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: MarkdownData.__content }}
          />
        </div>
      </div>
    )
  } catch (err) {
    return <NotFound />
  }
}
