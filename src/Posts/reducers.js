import { ADD_POST, DEL_POST } from './actions'

const initialState = {
	posts: []
}

export const reducer = ( currentState = initialState, action ) => {
	let { posts } = currentState;

	switch ( action.type ) {

		case ADD_POST:
			const id = currentState.posts.length + 1;
			const { title, body, author, category } = action;

			let newPost = {
				id,
				timestamp: Date.now(),
				title,
				body,
				author,
				category,
				voteScore: 1,
				deleted: false
			}

			posts.push( newPost );

			return {
				posts
			};
		
		case DEL_POST:
			posts = posts.filter( post => post.id !== action.id );
			return { posts };

		default:
			return currentState;
	}
}