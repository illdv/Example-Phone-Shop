import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css'

import Routes from './Routes'
import Header from './components/Header/'
import BtnScrollToTop from './components/BtnScrollToTop'

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Routes />
                <BtnScrollToTop />
            </React.Fragment>

        )
    }
}
export default App