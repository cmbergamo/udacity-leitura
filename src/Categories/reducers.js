import { CHANGE_CATEGORY } from './actions'

const initialState =  ''

export const category = ( currentState = initialState, action ) => {

	if ( action.type === CHANGE_CATEGORY ) {
		const { category } = action;

		return category;

	} else {
		return currentState;
	}
}