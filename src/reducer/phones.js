import { FETCH_PHONES, LOAD_MORE_PHONES, FETCH_PHONES_BY_NAME, SUCCESS } from "../constants";
import * as R from 'ramda'

const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case FETCH_PHONES + SUCCESS:
      const newValues = R.indexBy(R.prop('id'), payload)
      return R.merge(state, newValues)

    case LOAD_MORE_PHONES + SUCCESS:
      const moreValues = R.indexBy(R.prop('id'), payload)
      return R.merge(state, moreValues)

    case FETCH_PHONES_BY_NAME + SUCCESS:
      return R.assoc(payload.id, payload, state)

    default: return state
  }
}