import { ADD_PHONE_TO_BASKET, REMOVE_PHONE_FROM_BASKET, CLEAN_BASKET, REMOVE_ALL_PHONE_FROM_BASKET } from "../constants";
import { append, without, of, remove } from 'ramda'


const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case ADD_PHONE_TO_BASKET:
      return append(payload.id, state)

    case REMOVE_PHONE_FROM_BASKET:
      const ind = state.findIndex(value => value === payload.id)
      return remove(ind, 1, state)

    case REMOVE_ALL_PHONE_FROM_BASKET:
      return without(of(payload.id), state)

    case CLEAN_BASKET:
      return []

    default: return state
  }
}