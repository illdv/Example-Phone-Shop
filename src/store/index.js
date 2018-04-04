import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import reducer from '../reducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import history from '../history'

const enhancer = composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))

const store = createStore(reducer, enhancer)

//dev only, no need in prod
window.store = store

export default store