import { FETCH_PHONES_BY_ID, SUCCESS } from '../constants';
import { merge, prop } from 'ramda'

const initialState = {
  name: ''
}

export default (state = initialState, { type, payload }) => {

  switch (type) {



    case FETCH_PHONES_BY_ID + SUCCESS:

      return merge(state, {
        id: prop('id', payload)
      })

    default: return state
  }
}