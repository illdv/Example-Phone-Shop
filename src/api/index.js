import phones from './mockPhones'
import categories from './mockCategories'
import request from 'superagent'
import { find, propEq } from 'ramda'

export const fetchPhonesApi = async () => {
  const { body } = await request.get(
    'http://www.mocky.io/v2/5ac4d5522f00002a00f5fc29')

  return body.phones
}


export const loadMorePhonesApi = async ({ offset }) => {
  return new Promise(resolve => {
    resolve(phones)
  })
}

export const fetchPhoneByIdApi = async id => {
  return new Promise((resolve, reject) => {
    const phone = find(propEq('id', id), phones)
    resolve(phone)
  })
}
export const fetchCategoriesApi = async () => {
  return new Promise(resolve => {
    resolve(categories)
  })
}