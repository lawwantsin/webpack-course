import React from "react"

const getBundle = () => {
  import("lodash").then(_ => {
    console.log("imported", _)
  })
}

export default () => (
  <div>
    <h1 onClick={getBundle}>Gallery</h1>
  </div>
)
