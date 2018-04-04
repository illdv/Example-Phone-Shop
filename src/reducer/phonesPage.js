import * as R from 'ramda'
import { FETCH_PHONES, LOAD_MORE_PHONES, SUCCESS, SEARCH_PHONE } from '../constants'

const initialState = {
  ids: [],
  search: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PHONES + SUCCESS:
      return R.merge(state, {
        ids: R.pluck('id', payload)
      })

    case LOAD_MORE_PHONES + SUCCESS:
      const ids = R.pluck('id', payload)
      return R.merge(state, {
        ids: R.concat(state.ids, ids)
      })
    case SEARCH_PHONE:
      return R.merge(state, { search: payload })
    default: return state
  }
}