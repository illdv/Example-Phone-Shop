import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer'
import { save, load } from "redux-localstorage-simple"
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import history from '../history'



const createStoreWithMiddleware
  = composeWithDevTools(applyMiddleware(
    thunk,
    routerMiddleware(history),
    save({ states: ["basket", "phones"] })
  ))(createStore)

const store = createStoreWithMiddleware(
  reducer,
  load({ states: ["basket", "phones"] })
)

window.store = store

export default store