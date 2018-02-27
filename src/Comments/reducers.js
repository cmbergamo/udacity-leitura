import { INIT_COMMENTS, ADD_COMMENT, DEL_COMMENT, VOTE_COMMENT, INIT_COMMENTS_REP } from './actions';
import { DEL_POST } from '../Posts/actions';

export const comments = ( state = {} , action ) => {

	switch ( action.type ) {
		case INIT_COMMENTS_REP : 
			const { comments } = action;

			let novoState = {};
			for ( const c of comments ) {

				if ( !novoState[c.parentId] )
					novoState[c.parentId] =  [] ;

					novoState[c.parentId].push( c );
			}

			return novoState;
			
		case ADD_COMMENT :
			const { comment } = action;
			novoState = { ...state }; 
			if ( !novoState[comment.parentId] )
				novoState[comment.parentId] = [];

			novoState[comment.parentId].push( comment );
			

			return novoState;
			
		case DEL_COMMENT :
			return {
				...state,
				[action.comment.parentId] : state[action.comment.parentId].filter( c => c.id !== action.comment.id )
			}

		case DEL_POST :
			novoState = { ...state };
			delete novoState[ action.id ];
			
			return novoState;
		
		case VOTE_COMMENT :
			console.log( action );

			novoState = { ...state };
			let temp = novoState[action.comment.parentId].filter( c => c.id !== action.comment.id );

			console.log( novoState );

			temp.push( action.comment );

			
			return { 
				...novoState,
				[action.comment.parentId] : temp
			};

		default :
			return state;
	}
}