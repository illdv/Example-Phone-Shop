import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Main from './components/Main'
import SelfPhone from './components/SelfPhone';
import Basket from './components/Basket/'
import Error from './components/Error'

export default props =>
  <Switch>
    <Redirect from="/" to="/phones" exact />
    <Route path='/phones/:name' component={SelfPhone} />
    <Route path='/categories/:id' component={Main} />
    <Route path="/phones" component={Main} />
    <Route path='/basket' component={Basket} />
    <Route path="/error" component={Error} />
  </Switch>