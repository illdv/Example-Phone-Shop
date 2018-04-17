import { FETCH_PHONES, LOAD_MORE_PHONES, FETCH_PHONES_BY_NAME, SUCCESS, } from "../constants";
import * as R from 'ramda'

const initialState = {
  loading: true,
  entities: {}
}

export default (state = initialState, { type, payload }) => {





  switch (type) {

    case FETCH_PHONES + SUCCESS:
      const newValues = R.objOf('entities')(R.indexBy(R.prop('id'), payload))



      return R.merge({ loading: false }, newValues)

    case LOAD_MORE_PHONES + SUCCESS:
      const moreValues = R.indexBy(R.prop('id'), payload)
      return R.merge(state, moreValues)

    case FETCH_PHONES_BY_NAME + SUCCESS:

      const n = R.objOf('entities')(R.indexBy(R.prop('id'), [payload]))







      return R.merge({ loading: false }, n)

    default: return state
  }
}