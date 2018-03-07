import { EDIT_POST_REP, DEL_POST_REP, LOAD_ALL_REP, ADD_POST_REP } from './actions'

export const posts = ( currentstate = [] , action ) => {
	switch ( action.type ) {

		case ADD_POST_REP:
			
			let newPost = [{
				...action.post
			}]

			newPost = newPost.concat( currentstate );

			return newPost;

		//Para edição e votação;
		case EDIT_POST_REP:
			
			const novoArray = currentstate.filter( p => p.id !== action.post.id );
			
			novoArray.push( action.post );

			return novoArray;

		case LOAD_ALL_REP:
			
			const novosPosts = currentstate.concat(action.posts);
			return novosPosts;
			
		case DEL_POST_REP:

			return currentstate.filter( post => post.id !== action.post.id );

		default :
			return currentstate;
	}

}