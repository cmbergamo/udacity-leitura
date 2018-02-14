import { INIT_COMMENTS, ADD_COMMENT } from './actions';

export const comments = ( state = {} , action ) => {

	switch ( action.type ) {
		case INIT_COMMENTS : 
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
			console.log( novoState );

			return novoState

		default :
			return state;
	}
}