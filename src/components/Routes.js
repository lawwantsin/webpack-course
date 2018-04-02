import React from "react"
import { Route, Link } from "react-router-dom"
import universal from "react-universal-component"
import RoutesArray from "./RoutesArray"
import { renderRoutes } from "react-router-config"
import "../css/nav.css"

export default () => (
  <div>
    <div>{renderRoutes(RoutesArray)}</div>
  </div>
)
