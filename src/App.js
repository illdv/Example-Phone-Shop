import React, { Component } from 'react'



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