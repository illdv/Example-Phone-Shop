import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import App from './App'
import store from './store'
import history from './history'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  overrides: {
    MuiMenuItem: { // Name of the component ⚛️ / style shee
      selected: { // Name of the rule
        background: 'white', // Some CSS
      },
    },
  }
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
