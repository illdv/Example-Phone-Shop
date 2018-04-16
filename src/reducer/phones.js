import { FETCH_PHONES, LOAD_MORE_PHONES, FETCH_PHONES_BY_ID, SUCCESS, } from "../constants";
import * as R from 'ramda'

const initialState = {
  loading: true,
  entities: {}
}

export default (state = initialState, { type, payload }) => {





  switch (type) {






    case FETCH_PHONES + SUCCESS:


      const newValues = R.objOf('entities')(R.indexBy(R.prop('id'), payload))



      const setLoading = R.set(R.lensProp('loading'), false)(newValues)





      return R.merge(setLoading, newValues)

    case LOAD_MORE_PHONES + SUCCESS:
      const moreValues = R.indexBy(R.prop('id'), payload)
      return R.merge(state, moreValues)

    case FETCH_PHONES_BY_ID + SUCCESS:
      return R.assoc(payload.id, payload, state)

    default: return state
  }
}