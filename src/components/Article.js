import React from "react"
import "../css/Article.css"
import { fetchArticle } from "../actions"

import { bindActionCreators } from "redux"
import { connect } from "react-redux"

class Article extends React.Component {
  componentDidMount() {
    const slug = location.pathname.split("/").reverse()[0]
    this.props.fetchArticle(slug)
  }
  render() {
    const billboardStyle = {
      backgroundImage: `url(${this.props.article.content.posterImage})`
    }

    import(`../css/${props.article.site}/theme.css`)
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
    article: state.article,
    site: state.site
  }
}

export default connect(mapStateToProps, { fetchArticle })(Article)
