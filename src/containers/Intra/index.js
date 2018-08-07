import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Column } from 'bloomer'
import { Base } from '../../components/Layout'
import SideNav from '../../components/Intra/SideNav'
import asyncComponent from '../../components/AsyncComponent'

import routes from './intraRoutes'
const NotFound = asyncComponent(() => import('../NotFound'))

const mapRoutes = routes => routes.map((route, i) =>
  <RouteWithSubRoutes key={i} {...route} />
)

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    exact={route.exact}
    render={props =>
      route.component ? <route.component {...props} routes={route.routes} />
        : route.routes ? mapRoutes(route.routes) : null// Renders at least children
    }
  />
)

const IntraPage = () => {
  return (
    <Base>
      <Column isSize='narrow'>
        <SideNav
          items={routes}
        />
      </Column>
      <Column>
        <Switch>
          {mapRoutes(routes)}
          <Route status={NotFound} component={NotFound} />
        </Switch>
      </Column>
    </Base>
  )
}

export default IntraPage
