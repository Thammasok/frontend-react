import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { routes } from '../../../routers'

import Header from '../../Include/Header'
import NotFound from '../../Other/Notfound'

class Index extends Component {
  render() {    
    return (
      <section class="hero is-medium is-bold">
        <Header />

        <Switch>
          {routes.map((route,index) => (
            <Route key={index} path={route.path} component={route.component} exact={route.exact} data={route.pathMatch} />
          ))}
          <Route component={NotFound}/>
        </Switch>
      </section>
    )
  }
}

export default Index