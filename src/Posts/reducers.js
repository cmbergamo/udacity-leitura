import { ADD_POST, EDIT_POST, LOAD_ALL, DEL_POST } from './actions'

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

		case EDIT_POST:
			
			const novoArray = currentstate.filter( p => p.id !== action.id );
			const editedPost = currentstate.filter( p => p.id === action.id)[0];
			
			novoArray.push( {
				...editedPost,
				title: action.title,
				body: action.body
			 } );

			return novoArray;

		case LOAD_ALL:
			
			const novosPosts = currentstate.concat(action.posts);
			return novosPosts;
			
		case DEL_POST:

			return currentstate.filter( post => post.id !== action.id );

		default :
			return currentstate;
	}

}