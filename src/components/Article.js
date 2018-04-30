import React from "react"
import "../css/Article.css"
import NotFound from "./NotFound"
import { connect } from "react-redux"
import { actionTest } from "../actions"

const Article = props => {
  try {
    const billboardStyle = {
      backgroundImage: `url(${props.posterImage})`
    }

    import(`../css/${props.site}/theme.css`)
    return (
      <div className="Article">
        <div className="poster" style={billboardStyle} />
        <h1>{props.title}</h1>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: props.__content }}
        />
      </div>
    )
  } catch (error) {
    return <NotFound />
  }
}

export default connect(state => ({
  __content: state.text
}))(Article)
