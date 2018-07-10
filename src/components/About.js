import React from "react"
const MarkdownData = require("../../data/post.md")
const imagePath = require("../images/link.jpg")
import "../css/About.css"

export default () => (
  <div className="profile">
    <img src={imagePath} />
    <h1>{MarkdownData.title}</h1>
    <div
      className="content"
      dangerouslySetInnerHTML={{ __html: MarkdownData.__content }}
    />
  </div>
)
