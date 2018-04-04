import { ADD_PHONE_TO_BASKET, REMOVE_PHONE_FROM_BASKET, CLEAN_BASKET } from "../constants";
import { append, without, of } from 'ramda'

const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PHONE_TO_BASKET:
      return append(payload, state)

    case REMOVE_PHONE_FROM_BASKET:
      return without(of(payload), state)
    case CLEAN_BASKET:
      return []
    default: return state
  }
}