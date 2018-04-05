import React from "react"
import "../css/Article.css"
import { fetchArticle, requestArticle } from "../actions"
import { connect } from "react-redux"

class Article extends React.Component {
  componentDidMount() {
    const site = location.hostname.split(".")[0]
    const slug = this.props.match.params.slug
    this.props.dispatch(requestArticle(slug, site))
    this.props.dispatch(fetchArticle())
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.slug !== this.props.match.params.slug) {
      const dispatch = nextProps.dispatch
      const slug = nextProps.match.params.slug
      dispatch(fetchArticle(slug))
    }
  }

  render() {
    if (!this.props.article.content) return <div>Loading</div>
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

export default connect(mapStateToProps)(Article)
