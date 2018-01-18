import { CHANGE_CATEGORY } from './actions'

const initialState = {
	posts: [],
	selectedCategory: ''
}

export const categoryReducer = ( currentState = initialState, action ) => {
	if ( action.type === CHANGE_CATEGORY ) {
		const { category } = action;

		console.log(currentState);

		return {
			...currentState,
				selectedCategory: category
		}

	} else {
		return currentState;
	}
}