import { CHANGE_ORDER } from './actions'

const initialState =  'voteScore'

export const order = ( currentState = initialState, action ) => {

	if ( action.type === CHANGE_ORDER ) {
		const { order } = action;

		return order;

	} else {
		return currentState;
	}
}