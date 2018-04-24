import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'


import Routes from './Routes'
import Header from './components/Header'

class App extends Component {




    render() {


        return (
            <div>
                <Header />
                <Routes />

            </div>

        )
    }
}
export default App