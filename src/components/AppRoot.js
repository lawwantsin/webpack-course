import React from "react"
import { BrowserRouter } from "react-router-dom"
import Routes from "./RoutesArray"
import { renderRoutes } from "react-router-config"
import Header from "./Header"

export default class AppRoot extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const getSite = {
      site: location.hostname.split(".")[0]
    }

    return (
      <BrowserRouter>
        <div>{renderRoutes(Routes, getSite)}</div>
      </BrowserRouter>
    )
  }
}
