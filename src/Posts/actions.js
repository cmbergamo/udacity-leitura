export const ADD_POST = 'ADD_POST';
export const ADD_POST_REP = 'ADD_POST_REP';

//export const createPost = ( { title, body, author, category } ) => {
export const createPost = ( { id = 0, timestamp = Date.now() , title = '' , body = '' , author = '' , category = '' , voteScore = 1, deleted = false, commentCount = 1 } ) => {
	
	return { type: ADD_POST,
		post: {id,
		timestamp,
		title,
		body, //'Texto do post',
		author,
		category, //'pegar das existentes',
		voteScore,
		deleted,
		commentCount
	} };
}

export const DEL_POST = 'DEL_POST';
export const DEL_POST_REP = 'DEL_POST_REP';

export const deletePost = ( id ) => {
	
	return {
		type: DEL_POST,
		id
	}
}

export const EDIT_POST = 'EDIT_POST';
export const EDIT_POST_REP = 'EDIT_POST_REP';

export const editPost = ( post ) => {
	return {
		type: EDIT_POST,
		post
	}

}

export const VOTE_POST = 'VOTE_POST';

export const votePost = ( post, vote ) => {
	return {
		type: VOTE_POST,
		post,
		vote
	}

}

export const LOAD_ALL = 'LOAD_ALL';
export const LOAD_ALL_REP = 'LOAD_ALL_REP';

export const loadPosts = ( posts ) => {
	
	return {
		type: LOAD_ALL,
		posts
	}

}
