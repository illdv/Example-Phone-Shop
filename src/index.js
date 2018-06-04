import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import App from './App'
import store from './store'
import history from './history'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import 'typeface-roboto'
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
    action: {
      selected: "#ba68c8",
      hover: "#f3e5f5",
    },
 
  },

});

ReactDOM.render(

    <Provider store={store} >
        <ConnectedRouter history={history}>
        <MuiThemeProvider theme={theme}>
            <App />
            </MuiThemeProvider>
        </ConnectedRouter>
    </Provider>

    , document.getElementById('root'))
