import { ADD_POST, EDIT_POST } from './actions'
import { editPost } from '../api/ServerAPI';

export const post = ( currentstate = { posts: []} , action ) => {

	let { posts } = currentstate;

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
				posts
			};

			return state

		case EDIT_POST:
			
			const novoArray = posts.filter( p => p.id !== action.id );
			const editedPost = posts.filter( p => p.id === action.id);

			editedPost.title = action.title;
			editedPost.body = action.body;

			novoArray.push( editPost );

			return { posts: novoArray }
			

		default :
			return currentstate;
	}

}