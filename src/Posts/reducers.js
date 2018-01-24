import { ADD_POST, DEL_POST } from './actions'

export const postReducer = ( currentstate = {} , action ) => {

	let { posts = [], selectedCategory = '' } = currentstate;

	switch ( action.type ) {

		case ADD_POST:
					
			const newPost = {
				id: action.id,
				timestamp: action.timestamp,
				title: action.title,
				body: action.body,
				author: action.author,
				category: action.category,
				voteScore: action.voteScore,
				deleted: action.deleted,
				commentCount: action.commentCount
			}

			posts.push( newPost );

			const state = {
				...currentstate,
				posts
				// posts,
				// selectedCategory
			};

			console.log( " PostReducer: ", state);

			return state

		default :
			return currentstate;
	}

}