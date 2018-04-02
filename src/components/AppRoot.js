import React from "react"
import { Route, Link, BrowserRouter } from "react-router-dom"
import Routes from "./RoutesArray"
import { renderRoutes } from "react-router-config"
import RoutesArray from "./RoutesArray"
import Header from "./Header"
import "../css/nav.css"

export default class AppRoot extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const getSite = {
      site: location.hostname.split(".")[0],
      slug: location.pathname.split("/").reverse()[0]
    }

    return (
      <BrowserRouter>
        <div>
          <div className="nav">
            <Link to="/">Gallery</Link>
            <Link to="/about">About</Link>
            <Link to="/article">Article</Link>
          </div>
          <div>{renderRoutes(RoutesArray, getSite)}</div>
        </div>
      </BrowserRouter>
    )
  }
}
