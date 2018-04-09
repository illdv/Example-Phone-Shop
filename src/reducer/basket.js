import { ADD_PHONE_TO_BASKET, REMOVE_PHONE_FROM_BASKET, CLEAN_BASKET, CHANGE_QUALITY } from "../constants";
import { find, concat, repeat, append, without, of, assoc } from 'ramda'


const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case ADD_PHONE_TO_BASKET:
      return append(payload, state)

    case CHANGE_QUALITY:

      const r = repeat(payload.id, payload.quantity)
      const w = without(payload.id, state)

      //No Jump
      return w[0] === state[0] ? concat(w, r) : concat(r, w)

    case REMOVE_PHONE_FROM_BASKET:


      return without(of(payload), state)

    case CLEAN_BASKET:
      return []

    default: return state
  }
}