import React, { Component } from 'react'


import CssBaseline from '@material-ui/core/CssBaseline'
import Routes from './Routes'
import Header from './components/Header'

import Footer from './components/Footer'
import BtnScrollToTop from './components/BtnScrollToTop'


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Header />
                <Routes />
                <Footer />
                <BtnScrollToTop />
            </React.Fragment>

        )
    }
}
export default App