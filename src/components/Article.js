import React from "react"
import "../css/Article.css"
import NotFound from "./NotFound"
import { connect } from "react-redux"
import { fetchArticle } from "../actions"

class Article extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.dispatch(fetchArticle(this.props.site, this.props.params.slug))
  }

  render() {
    try {
      const billboardStyle = {
        backgroundImage: `url(${this.props.posterImage})`
      }

      import(`../css/${this.props.site}/theme.css`)
      return (
        <div className="Article">
          <div className="billboard" style={billboardStyle} />
          <h1>{this.props.title}</h1>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: this.props.__content }}
          />
        </div>
      )
    } catch (error) {
      return <NotFound />
    }
  }
}

export default connect(state => ({
  ...state.content
}))(Article)
