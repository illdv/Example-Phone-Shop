import { FETCH_PHONES, LOAD_MORE_PHONES, FETCH_PHONES_BY_ID, START, SUCCESS, FAIL, ADD_PHONE_TO_BASKET, SEARCH_PHONE, FETCH_CATEGORIES, REMOVE_PHONE_FROM_BASKET, CLEAN_BASKET, CHANGE_QUALITY } from "../constants";
import { find, propEq, assoc } from 'ramda'
import { replace } from 'react-router-redux'


const generateId = phones => phones.map(phone => assoc('id', (Date.now() + Math.random()).toString(), phone))

const phones = fetch('http://www.mocky.io/v2/5ac4d5522f00002a00f5fc29')
    .then(response => response.json())



export const fetchPhones = () => dispatch => {


    dispatch({
        type: FETCH_PHONES + START
    })

    phones.then(body =>
        dispatch({
            type: FETCH_PHONES + SUCCESS,
            payload: body.phones
        })
    ).catch(error => {
        dispatch({
            type: FETCH_PHONES + FAIL,
            payload: error
        })
        dispatch(replace('/error'))
    })
}


export const loadMorePhones = () => (dispatch, getState) => {

    const offset = (getState().phonesPage.ids).length
    console.log(offset);

    dispatch({ type: LOAD_MORE_PHONES + START })

    phones.then(body => dispatch({
        type: LOAD_MORE_PHONES + SUCCESS,
        payload: generateId(body.phones)
    })
    )
        .catch(error => {
            dispatch({
                type: LOAD_MORE_PHONES + FAIL,
                payload: error
            })
            dispatch(replace('/error'))
        })
}


export const fetchPhoneById = name => dispatch => {

    dispatch({
        type: FETCH_PHONES_BY_ID + START
    })

    phones.then(body => {

        dispatch({
            type: FETCH_PHONES_BY_ID + SUCCESS,
            payload: find(propEq('name', name))(generateId(body.phones))
        })
    }


    ).catch(err => {
        dispatch({
            type: FETCH_PHONES_BY_ID + FAIL,
            payload: err,
            error: true
        })
        dispatch(replace('/error'))
    }
    )
}

export const addPhoneToBasket = id => dispatch => {

    dispatch({
        type: ADD_PHONE_TO_BASKET,
        payload: id
    })
}
export const handleQuantityToBasket = (quantity, id) => dispatch => {

    dispatch({
        type: CHANGE_QUALITY,
        payload: { quantity, id }
    })
}

export const removePhoneFromBasket = id => dispatch => {
    dispatch({
        type: REMOVE_PHONE_FROM_BASKET,
        payload: id
    })
}

export const searchPhone = text => dispatch => {
    dispatch({
        type: SEARCH_PHONE,
        payload: text
    })
}

export const fetchCategories = () => dispatch => {

    dispatch({ type: FETCH_CATEGORIES + START })

    fetch('http://www.mocky.io/v2/5ac7e0183100006000a57690')
        .then(response => response.json())
        .then(body => {
            dispatch({
                type: FETCH_CATEGORIES + SUCCESS,
                payload: body.categories
            })
        }).catch(error =>
            dispatch({
                type: FETCH_CATEGORIES + FAIL,
                payload: error,
                error: true
            })
        )
}



export const cleanBasket = () => dispatch => {
    dispatch({
        type: CLEAN_BASKET
    })
}
export const checkoutBasket = phones => () => {
    alert(JSON.stringify(phones))
}