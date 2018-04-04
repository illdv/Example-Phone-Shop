import { FETCH_PHONES, LOAD_MORE_PHONES, FETCH_PHONES_BY_ID, START, SUCCESS, FAIL, ADD_PHONE_TO_BASKET, SEARCH_PHONE, FETCH_CATEGORIES, REMOVE_PHONE_FROM_BASKET, CLEAN_BASKET } from "../constants";
import { fetchPhonesApi, loadMorePhonesApi, fetchPhoneByIdApi, fetchCategoriesApi } from '../api'



export const fetchPhones = () => async dispatch => {

    dispatch({ type: FETCH_PHONES + START })


    const phones = await fetchPhonesApi()
    const generateId = phones.map(phone => console.log(phone)
    )


    dispatch({
        type: FETCH_PHONES + SUCCESS,
        payload: phones
    })
}




export const loadMorePhones = () => async (dispatch, getState) => {

    const offset = (getState().phonesPage.ids).length

    dispatch({ type: LOAD_MORE_PHONES + START })

    try {
        const phones = await loadMorePhonesApi({ offset })
        dispatch({
            type: LOAD_MORE_PHONES + SUCCESS,
            payload: phones
        })

    } catch (err) {
        dispatch({
            type: LOAD_MORE_PHONES + FAIL,
            payload: err,
            error: true
        })
    }
}

export const fetchPhoneById = id => async dispatch => {
    dispatch({
        type: FETCH_PHONES_BY_ID + START
    })

    try {
        const phone = await fetchPhoneByIdApi(id)
        dispatch({
            type: FETCH_PHONES_BY_ID + SUCCESS,
            payload: phone
        })
    } catch (err) {
        dispatch({
            type: FETCH_PHONES_BY_ID + FAIL,
            payload: err,
            error: true
        })
    }
}

export const addPhoneToBasket = id => dispatch => {
    dispatch({
        type: ADD_PHONE_TO_BASKET,
        payload: id
    })
}

export const searchPhone = text => dispatch => {
    dispatch({
        type: SEARCH_PHONE,
        payload: text
    })
}

export const fetchCategories = () => async dispatch => {

    dispatch({ type: FETCH_CATEGORIES + START })

    try {
        const categories = await fetchCategoriesApi()
        dispatch({
            type: FETCH_CATEGORIES + SUCCESS,
            payload: categories
        })

    } catch (err) {
        dispatch({
            type: FETCH_CATEGORIES + FAIL,
            payload: err,
            error: true
        })
    }
}

export const removePhoneFromBasket = id => dispatch => {
    dispatch({
        type: REMOVE_PHONE_FROM_BASKET,
        payload: id
    })
}

export const cleanBasket = () => dispatch => {
    dispatch({
        type: CLEAN_BASKET
    })
}
export const checkoutBasket = phones => () => {
    alert(JSON.stringify(phones))
}