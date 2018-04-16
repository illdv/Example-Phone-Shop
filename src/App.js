import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import { Route, Switch, Redirect } from 'react-router-dom'
import Phones from './components/Phones'
import SelfPhone from './components/SelfPhone';
import Basket from './components/Basket/index'


class App extends Component {




    render() {


        return (



            <Switch>
                <Redirect from="/" to="/phones" exact />
                <Route path='/phones/:name' component={SelfPhone} />
                <Route path='/categories/:id' component={Phones} />
                <Route path="/phones" component={Phones} />
                <Route path="/basket" component={Basket} />

            </Switch>

        )
    }
}










export default App