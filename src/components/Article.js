import React from "react"
import "../css/Article.css"
import { fetchArticle } from "../actions"

import { bindActionCreators } from "redux"
import { connect } from "react-redux"

class Article extends React.Component {
  componentDidMount() {
    this.props.fetchArticle()
  }

  render() {
    const billboardStyle = {
      backgroundImage: `url(${this.props.article.content.posterImage})`
    }

    return (
      <div className="Article">
        <div className="billboard" style={billboardStyle} />
        <h1>{this.props.article.content.title}</h1>
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: this.props.article.content.__content
          }}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    article: state.article
  }
}

export const loadData = store => {
  return store.dispatch(fetchArticle())
}

export default connect(mapStateToProps, { fetchArticle })(Article)
