import { ADD_PHONE_TO_BASKET, REMOVE_PHONE_FROM_BASKET, CLEAN_BASKET, CHANGE_QUALITY } from "../constants";
import * as R from 'ramda'


const initialState = []

export default (state = initialState, { type, payload }) => {


  switch (type) {

    case ADD_PHONE_TO_BASKET:
console.log(state);
    
      return  R.append(payload, state) 


    case CHANGE_QUALITY:

      if (payload.quantity === '0') {

        return R.filter(phone => phone.id !== payload.phone.id)(state)
      }

      const currentQuantity = R.repeat(payload.phone, payload.quantity)

      const index = R.findIndex(phone => phone.id === payload.phone.id)(state)

      const phones = R.compose(
        R.insertAll(index, currentQuantity),
        R.filter(value => value.id !== payload.phone.id)
      )(state)

      return phones

    case REMOVE_PHONE_FROM_BASKET:

      const filter = R.filter(phone => phone.id !== payload)(state)



      return filter

    case CLEAN_BASKET:
      return []

    default: return state
  }

}