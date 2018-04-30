import React from "react"
import { Route, Link } from "react-router-dom"
import universal from "react-universal-component"
import { Switch } from "react-router"
import "../css/nav.css"
import NotFound from "./NotFound"

const UniversalComponent = universal(props => import(`./${props.page}`))

export default () => (
  <div>
    <div className="nav">
      <Link to="/">Gallery</Link>
      <Link to="/about">About</Link>
      <Link to="/article/post">Article</Link>
      <Link to="/article/post2">Article 2</Link>
    </div>
    <Switch>
      <Route exact path="/">
        <UniversalComponent page="Gallery" />
      </Route>
      <Route
        path="/about"
        render={({ staticContext }) => {
          const site = staticContext
            ? staticContext.site
            : location.hostname.split(".")[0]
          return <UniversalComponent site={site} page="About" />
        }}
      />
      <Route
        path="/article/:slug"
        render={({ staticContext, match }) => {
          const site = staticContext
            ? staticContext.site
            : location.hostname.split(".")[0]
          return <UniversalComponent site={site} match={match} page="Article" />
        }}
      />
      <Route component={NotFound} />
    </Switch>
  </div>
)
