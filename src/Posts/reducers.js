import { ADD_POST, EDIT_POST_REP, DEL_POST, LOAD_ALL_REP } from './actions'
import ServerAPI from '../api/ServerAPI';

export const posts = ( currentstate = [] , action ) => {
	switch ( action.type ) {

		case ADD_POST:
			
			let newPost = [{
				id: action.id,
				timestamp: action.timestamp,
				title: action.title,
				body: action.body,
				author: action.author,
				category: action.category,
				voteScore: action.voteScore,
				deleted: action.deleted,
				commentCount: action.commentCount
			}]

			newPost = newPost.concat( currentstate );

			return newPost;

		case EDIT_POST_REP:
			
			let novoArray = currentstate.filter( p => p.id !== action.id );
			let editedPost = currentstate.filter( p => p.id === action.id);

			editedPost.title = action.title;
			editedPost.body = action.body;

			novoArray = novoArray.concat( ServerAPI.editPost );

			return novoArray;

		case LOAD_ALL_REP:
			
			const novosPosts = currentstate.concat(action.posts);
			return novosPosts;
			
		case DEL_POST:

			return currentstate.filter( post => post.id !== action.id );

		default :
			return currentstate;
	}

}