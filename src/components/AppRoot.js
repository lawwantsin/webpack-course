import React from "react"
const MarkdownData = require("../../data/post.md")
const imagePath = require("../images/link.jpg")

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="profile">
        <img src={imagePath} />
        <h1 id="title">{MarkdownData.title}</h1>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: MarkdownData.__content }}
        />
      </div>
    )
  }
}
