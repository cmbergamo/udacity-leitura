import { EDIT_POST_REP, DEL_POST_REP, LOAD_ALL_REP, ADD_POST_REP } from './actions'
import { ADD_COMMENT_REP, DEL_COMMENT_REP } from '../Comments/actions';

export const posts = ( currentstate = [] , action ) => {
	switch ( action.type ) {

		case ADD_POST_REP:
			
			let newPost = [{
				...action.post
			}, ...currentstate ]

			// newPost = newPost.concat( currentstate );

			return newPost;

		//Para edição e votação;
		case EDIT_POST_REP:
			
			let novoArray = currentstate.filter( p => p.id !== action.post.id );
			
			novoArray.push( action.post );

			return novoArray;

		case LOAD_ALL_REP:
			
			const novosPosts = currentstate.concat(action.posts);
			return novosPosts;
			
		case DEL_POST_REP:

			return currentstate.filter( post => post.id !== action.post.id );

		case ADD_COMMENT_REP:
			novoArray = currentstate.filter( post => post.id !== action.comment.parentId );
			newPost = currentstate.find( post => post.id === action.comment.parentId );

			newPost.commentCount += 1;

			novoArray.push( newPost );

			return novoArray;
		
		case DEL_COMMENT_REP:
			novoArray = currentstate.filter( post => post.id !== action.comment.parentId );
			newPost = currentstate.find( post => post.id === action.comment.parentId );

			newPost.commentCount -= 1;

			novoArray.push( newPost );

			return novoArray;

		default :
			return currentstate;
	}

}