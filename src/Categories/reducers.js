import { CHANGE_CATEGORY } from './actions'

const initialState = {
	category: ''
}

export const category = ( currentState = initialState, action ) => {

	if ( action.type === CHANGE_CATEGORY ) {
		const { category } = action;

		const state = {
			category
		}

		return state;

	} else {
		return currentState;
	}
}