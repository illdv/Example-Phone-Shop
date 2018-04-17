import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import phones from './phones'
import phonesPage from './phonesPage'
import selfPhonePage from './selfPhonePage'
import basket from './basket'
import categories from './categories'


export default combineReducers({
    routing: routerReducer,
    phones, phonesPage, selfPhonePage, basket, categories
})