export const INIT_COMMENTS = "INIT_COMMENT";
export const INIT_COMMENTS_REP = "INIT_COMMENTS_REP";

export const initComments = ( post ) => {
	return {
		type: INIT_COMMENTS,
		post
	}
}

export const ADD_COMMENT = "ADD_COMMENT";
export const ADD_COMMENT_REP = "ADD_COMMENT_REP";

export const addComment = ( comment ) => {
	return {
		type: ADD_COMMENT,
		comment
	}
}

export const EDI_COMMENT = "EDI_COMMENT";
export const EDI_COMMENT_REP = "EDIT_COMMENT_REP";

export const editComment = ( comment ) => {
	return {
		type: EDI_COMMENT,
		comment
	}
}

export const DEL_COMMENT = "DEL_COMMENT";
export const DEL_COMMENT_REP = "DEL_COMMENT_REP";

export const delComment = ( comment ) => {
	return {
		type: DEL_COMMENT,
		comment
	}
}

export const VOTE_COMMENT = "VOTE_COMMENT";

export const voteComment = ( comment, vote ) => { 
	return {
		type: VOTE_COMMENT,
		comment,
		vote
	}
}
