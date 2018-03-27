import React from "react"
import "../css/Header.css"
import { Link } from "react-router"

export default props => (
  <div className="nav">
    <Link to="/">Gallery</Link>
    <Link to="/about">About</Link>
    <Link to="/article">Article</Link>
  </div>
)
