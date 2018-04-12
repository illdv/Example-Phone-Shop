import { ADD_PHONE_TO_BASKET, REMOVE_PHONE_FROM_BASKET, CLEAN_BASKET, CHANGE_QUALITY } from "../constants";
import { replace, repeat, append, without, of } from 'ramda'


const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case ADD_PHONE_TO_BASKET:


      return append(payload.id, state)


    case CHANGE_QUALITY:

      const currentQuantity = repeat(payload.id, payload.quantity).join(' ')

      const fl = state.filter(value => value === payload.id).join(' ')

      const rep = replace(fl, currentQuantity, state.join(' ')).split(' ')

      return rep

    case REMOVE_PHONE_FROM_BASKET:

      return without(of(payload), state)

    case CLEAN_BASKET:
      return []

    default: return state
  }
}