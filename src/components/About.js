import React from "react"
import "../css/About.css"

export default props => {
  return (
    <div>
      <div className="profile">
        <img src={props.imagePath} />
        <h1>{props.title}</h1>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  )
}
