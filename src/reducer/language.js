import { LANGUAGE_CHANGE } from '../constants'


const initialState = ''

export default (state = initialState, { type, payload }) => {



	switch (type) {		
		case LANGUAGE_CHANGE:
			return payload
		default: return state
	}
}