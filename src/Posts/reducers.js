import { ADD_POST, EDIT_POST, LOAD_ALL, DEL_POST } from './actions'
import { editPost } from '../api/ServerAPI';

export const posts = ( currentstate = [] , action ) => {
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

			currentstate.push( newPost );

			return currentstate;

		case EDIT_POST:
			
			const novoArray = currentstate.filter( p => p.id !== action.id );
			const editedPost = currentstate.filter( p => p.id === action.id);

			editedPost.title = action.title;
			editedPost.body = action.body;

			novoArray.push( editPost );

			return novoArray;

		case LOAD_ALL:
			
			Array.prototype.push.apply(currentstate, action.posts);
			return currentstate;
			
		case DEL_POST:
			
			return currentstate.filter( post => post.id !== action.id );

		default :
			return currentstate;
	}

}