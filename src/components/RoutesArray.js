import React from "react"
import { Route, Link } from "react-router-dom"
import { renderRoutes } from "react-router-config"
import { Switch } from "react-router"
import Article, { loadData } from "./Article"

import universal from "react-universal-component"

export default [
  {
    path: "/",
    component: universal(props => import(`./Gallery`)),
    exact: true
  },
  {
    path: "/article/:id",
    component: Article,
    loadData: loadData
  },
  {
    path: "/article/drafting/:id",
    component: universal(props => import(`./ArticleDrafting`))
  },
  {
    path: "/about",
    component: universal(props => import(`./About`))
  }
]
