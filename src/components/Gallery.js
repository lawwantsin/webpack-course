import React from "react"
import "../css/Gallery.css"

const getBundle = () => {
  import("lodash")
    .then(_ => {
      console.log("imported", _)
    })
    .catch(err => console.log(err))
}

export default () => (
  <div>
    <h1 onClick={getBundle}>Gallery</h1>
  </div>
)
