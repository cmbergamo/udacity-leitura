export const INIT_COMMENTS = "INIT_COMMENT";

export const initComments = ( comments = [] ) => {
	return {
		type: INIT_COMMENTS,
		comments
	}
}

export const ADD_COMMENT = "ADD_COMMENT";

export const addComment = ( comment ) => {
	return {
		type: ADD_COMMENT,
		comment
	}
}

export const DEL_COMMENT = "DEL_COMMENT";

export const delComment = ( comment ) => {
	return {
		type: DEL_COMMENT,
		comment
	}
}

export const VOTE_COMMENT = "VOTE_COMMENT";

export const voteComment = ( { parentId, id, voteScore} ) => { 
	return {
		type: VOTE_COMMENT,
		parentId,
		id,
		voteScore
	}
}