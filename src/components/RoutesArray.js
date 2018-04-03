import React from "react"
import { Route, Link } from "react-router-dom"
import { renderRoutes } from "react-router-config"
import { Switch } from "react-router"

import universal from "react-universal-component"
import { fetchArticle } from "../actions"

export const loadArticle = store => {
  return store.dispatch(fetchArticle())
}

export default [
  {
    path: "/",
    component: universal(props => import(`./Gallery`)),
    exact: true
  },
  {
    path: "/article/drafting/:slug",
    component: universal(props => import(`./ArticleDrafting`))
  },
  {
    path: "/article/:slug",
    component: universal(props => import(`./Article`)),
    loadData: loadArticle
  },
  {
    path: "/about",
    component: universal(props => import(`./About`))
  }
]
