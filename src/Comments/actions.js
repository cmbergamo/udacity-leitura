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
