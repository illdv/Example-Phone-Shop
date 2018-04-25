import * as R from 'ramda'

export const generateId = phones => phones.map(phone => R.assoc('id', (Date.now() + Math.random()).toString(), phone))

export const getPhoneById = (state, id) => R.prop(id, state.phones)


export const getTotalBasketPrice = state => {
  const totalPrice = R.compose(
    R.sum,
    R.pluck('price'),
    R.map(id => getPhoneById(state, id))
  )(state.basket)

  return totalPrice
}

export const getBasketPhonesWithCount = state => {
  const uniqIds = R.uniq(state.basket)

  const phoneCount = id => R.compose(
    R.length,
    R.filter(basketId => R.equals(id, basketId))
  )(state.basket)

  const phoneWithCount = phone => R.assoc('count', phoneCount(phone.id), phone)

  const phones = R.compose(
    R.map(phoneWithCount),
    R.map(id => getPhoneById(state, id))
  )(uniqIds)

  return phones
}

export const getActiveCategoryId = ownProps =>
  R.path(['match', 'params', 'id'], ownProps)


export const getPhones = (state, ownProps) => {

  let index = 0
  const iterationArray = (searchArr) => {
    if (index >= searchArr.length) {
      index = 0
    }
    const result = searchArr ? searchArr[index] : ''
    index += 1
    return result
  }

  const applySearch = item =>
    R.contains(
      iterationArray(state.phonesPage.search),
      R.prop('name', item)
    )

  const activeCategoryId = getActiveCategoryId(ownProps)
  const applyCategory = item => R.equals(
    activeCategoryId,
    R.prop('categoryId', item)
  )

  const phones = R.compose(
    R.filter(applySearch),
    R.when(R.always(activeCategoryId), R.filter(applyCategory)),
    R.map(id => getPhoneById(state, id))
  )(state.phonesPage.ids)


  return phones
}


