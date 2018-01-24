import { CHANGE_CATEGORY } from './actions'

const initialState = {
	posts: [],
	selectedCategory: ''
}

export const categoryReducer = ( currentState = initialState, action ) => {

	if ( action.type === CHANGE_CATEGORY ) {
		const { category } = action;

		const state = {
			...currentState,
			selectedCategory: category
		}
		
		console.log( " CategoryReducer: ", state);

		return state;

	} else {
		return currentState;
	}
}