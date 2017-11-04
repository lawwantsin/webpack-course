import React from "react"
const MarkdownData = process.env.WEBPACK
  ? require("../../data/post.md")
  : { title: "", __content: "" }
const imagePath = process.env.WEBPACK ? require("../images/link.jpg") : ""

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="profile">
        <img src={imagePath} />
        <h1>{MarkdownData.title}</h1>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: MarkdownData.__content }}
        />
      </div>
    )
  }
}
