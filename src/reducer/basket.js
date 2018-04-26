import { ADD_PHONE_TO_BASKET, REMOVE_PHONE_FROM_BASKET, CLEAN_BASKET, CHANGE_QUALITY } from "../constants";
import * as R from 'ramda'


const initialState = []

export default (state = initialState, { type, payload }) => {


  switch (type) {

    case ADD_PHONE_TO_BASKET:



      return R.append(payload, state)



    case CHANGE_QUALITY:
      console.log(payload);

      if (payload.quantity === '0') {

        return state.filter(phone => phone.id !== payload.phone.id)
      }

      const currentQuantity = R.repeat(payload.phone, payload.quantity)


      const fl = state.filter(value => value.id !== payload.phone.id)




      const index = R.findIndex(R.propEq('id', payload.phone.id))


      const copy = state.slice()
      const sp = copy.splice(index, currentQuantity.length, ...currentQuantity)


      return state

    case REMOVE_PHONE_FROM_BASKET:

      const filter = R.filter(phone => phone.id !== payload)(state)



      return filter

    case CLEAN_BASKET:
      return []

    default: return state
  }

}