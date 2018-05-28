import { FETCH_CATEGORIES, SUCCESS } from '../constants'
import * as R from 'ramda'

const initialState = ''

export default (state = initialState, { type, payload }) => {


	switch (type) {
		case 'LANGUAGE_CHANGE':
			return `${state}${payload}`
		default: return state
	}
}