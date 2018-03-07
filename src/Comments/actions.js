export const INIT_COMMENTS = "INIT_COMMENT";
export const INIT_COMMENTS_REP = "INIT_COMMENTS_REP";

export const initComments = ( post ) => {
	return {
		type: INIT_COMMENTS,
		post
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

export const voteComment = ( comment ) => { 
	
	return {
		type: VOTE_COMMENT,
		comment
	}
}

export const EDIT_COMMENT = "EDIT_COMMENT";
export const EDIT_COMMENT_REP = "EDIT_COMMENT_REP";

export const editComment = ( comment ) => {
	return {
		type: EDIT_COMMENT,
		comment
	}
}