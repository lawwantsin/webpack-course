import React from "react"
import { Route, Link } from "react-router-dom"
import universal from "react-universal-component"
import { Switch } from "react-router"
import "../css/nav.css"
import NotFound from "./NotFound"

const UniversalComponent = universal(props => import(`./${props.page}`))

const getSite = staticContext =>
  staticContext || {
    site: location.hostname.split(".")[0]
  }

export default props => {
  return (
    <div>
      <div className="nav">
        <Link to="/">Gallery</Link>
        <Link to="/about">About</Link>
        <Link to="/article/post">Article 1</Link>
        <Link to="/draft/article/post">Draft 1</Link>
        <Link to="/article/post2">Article 2</Link>
        <Link to="/draft/article/post2">Draft 2</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <UniversalComponent page="Gallery" />
        </Route>
        <Route
          path="/about"
          render={({ staticContext }) => {
            const site = getSite(staticContext)
            return <UniversalComponent {...site} page="About" />
          }}
        />
        <Route
          path="/draft/article/:slug"
          render={({ staticContext, match }) => {
            const site = getSite(staticContext)
            return (
              <UniversalComponent {...site} {...match} page="DraftArticle" />
            )
          }}
        />
        <Route
          path="/article/:slug"
          render={({ staticContext, match }) => {
            const site = getSite(staticContext)
            return <UniversalComponent {...site} {...match} page="Article" />
          }}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}
