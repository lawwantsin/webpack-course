import React from "react"
import { Route, Link } from "react-router-dom"
import universal from "react-universal-component"
import { Switch } from "react-router"
import "../css/nav.css"

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
        <Link to="/article">Article</Link>
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
        <Route path="/article">
          <UniversalComponent page="Article" />
        </Route>
      </Switch>
    </div>
  )
}
