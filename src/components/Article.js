import React from "react"
import "../css/Article.css"
import NotFound from "./NotFound"

export default props => {
  try {
    const MarkdownData = require(`../../data/${props.site}/${
      props.params.slug
    }.md`)
    return (
      <div className="Article">
        <div className="billboard" />
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: MarkdownData.__content }}
        />
      </div>
    )
  } catch (error) {
    return <NotFound />
  }
}
