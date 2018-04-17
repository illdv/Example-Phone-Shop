import { FETCH_PHONES_BY_NAME, SUCCESS } from '../constants';
import { merge, prop } from 'ramda'

const initialState = {
  id: ''
}

export default (state = initialState, { type, payload }) => {

  switch (type) {



    case FETCH_PHONES_BY_NAME + SUCCESS:

      return merge(state, {
        id: prop('id', payload)
      })

    default: return state
  }
}