import { CHANGE_ORDER } from './actions'

const initialState =  ''

export const order = ( currentState = initialState, action ) => {

	if ( action.type === CHANGE_ORDER ) {
		const { category } = action;

		return category;

	} else {
		return currentState;
	}
}