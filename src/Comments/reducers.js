import { INIT_COMMENTS_REP, DEL_COMMENT_REP, EDI_COMMENT_REP, ADD_COMMENT_REP } from './actions';
import { DEL_POST_REP } from '../Posts/actions';

export const comments = ( state = {} , action ) => {

	switch ( action.type ) {
		case INIT_COMMENTS_REP : 
			const { comments } = action;

			let novoState = { ...state };
			for ( const c of comments ) {

				if ( !novoState[c.parentId] )
					novoState[c.parentId] =  [] ;

					novoState[c.parentId].push( c );
			}

			return novoState;
			
		case ADD_COMMENT_REP :
			let { comment } = action;
			novoState = { ...state }; 
			if ( !novoState[comment.parentId] )
				novoState[comment.parentId] = [];

			novoState[comment.parentId].push( comment );
			

			return novoState;
		
		// Para edição e votação :
		case EDI_COMMENT_REP :
			comment = action.comment;
			novoState = { ...state }; 
			
			let filtro = novoState[comment.parentId].filter( c => c.id !== comment.id );

			filtro.push( comment );
			novoState[comment.parentId] = filtro;
			
			return novoState;
			
		case DEL_COMMENT_REP :
			
			return {
				...state,
				[action.comment.parentId] : state[action.comment.parentId].filter( c => c.id !== action.comment.id )
			}

		case DEL_POST_REP :
			novoState = { ...state };
			delete novoState[ action.post.id ];
			
			return novoState;

		default :
			return state;
	}
}