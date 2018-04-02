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
    import(`../css/${props.article.site}/theme.css`)
    return (
      <div>
        <h1>{this.props.article.content.title}</h1>
        <h1>{this.props.article.content.author}</h1>
        <p
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

export const loadData = store => {
  return store.dispatch(fetchArticle())
}

export default connect(mapStateToProps, { fetchArticle })(Article)
