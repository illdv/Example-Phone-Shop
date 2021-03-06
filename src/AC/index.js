import { FETCH_PHONES, LOAD_MORE_PHONES, FETCH_PHONES_BY_NAME, START, SUCCESS, FAIL, ADD_PHONE_TO_BASKET, SEARCH_PHONE, FETCH_CATEGORIES, REMOVE_PHONE_FROM_BASKET, CLEAN_BASKET, CHANGE_QUALITY, LANGUAGE_CHANGE  } from "../constants";
import * as R from 'ramda'
import { replace } from 'react-router-redux'
import dictionaries from './../translate/dictionaries'
const generateId = phones => phones.map(phone => R.assoc('id', (Date.now() + Math.random()).toString(), phone))


const phones = fetch('http://www.mocky.io/v2/5aeb3da33000001000575468')
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

    dispatch({ type: LOAD_MORE_PHONES + START })

    offset !== 12 && phones.then(body => {

        return dispatch({
            type: LOAD_MORE_PHONES + SUCCESS,
            payload: generateId(body.phones)
        })
    }
    )
        .catch(error => {
            dispatch({
                type: LOAD_MORE_PHONES + FAIL,
                payload: error
            })
            dispatch(replace('/error'))
        })
}


export const fetchPhoneByName = name => dispatch => {

    dispatch({
        type: FETCH_PHONES_BY_NAME + START
    })

    phones.then(body => {
        dispatch({
            type: FETCH_PHONES_BY_NAME + SUCCESS,
            payload: R.find(R.propEq('name', name))(body.phones)
        })
    }

    ).catch(err => {
        dispatch({
            type: FETCH_PHONES_BY_NAME + FAIL,
            payload: err,
        })
        dispatch(replace('/error'))
    }
    )
}

export const fetchCategories = () => dispatch => {

    dispatch({ type: FETCH_CATEGORIES + START })

    fetch('http://www.mocky.io/v2/5ac7e0183100006000a57690')
        .then(response => response.json())
        .then(body => {
            return dispatch({
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

export const addPhoneToBasket = phone => dispatch => {
    dispatch({
        type: ADD_PHONE_TO_BASKET,
        payload: phone
    })
}
export const handleQuantityToBasket = (quantity, phone) => dispatch => {

    dispatch({
        type: CHANGE_QUALITY,
        payload: { quantity, phone }
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
        type: SEARCH_PHONE + START
    })

    phones.then(body => {
        const applySearch = item => R.contains(
            text,
            R.prop('name', item)
        )
        const foundPhones = R.compose(
            R.map(phone => phone.name),
            R.filter(applySearch)
        )(body.phones)
console.log(foundPhones);

        return dispatch({
            type: SEARCH_PHONE + SUCCESS,
            payload: foundPhones
        })
    }

    ).catch(error => {
        dispatch({
            type: SEARCH_PHONE + FAIL,
            payload: error
        })
        dispatch(replace('/error'))
    })
}

export const cleanBasket = () => dispatch => {
    dispatch({
        type: CLEAN_BASKET
    })
    dispatch(replace('/phones'))
}

export const languageChange = lang => dispatch => {
    dispatch({
        type: LANGUAGE_CHANGE ,
        payload: {[lang]:dictionaries[lang]}
    })
}