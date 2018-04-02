import React from "react"
import "../css/Header.css"
import { Link } from "react-router-dom"

export default props => {
  return (
    <div className="nav">
      <Link to="/">Gallery</Link>
      <Link to="/about">About</Link>
      <Link to="/article/post">Article</Link>
    </div>
  )
}
