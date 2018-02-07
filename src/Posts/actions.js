export const ADD_POST = 'ADD_POST';

//export const createPost = ( { title, body, author, category } ) => {
export const createPost = ( { id = 0, timestamp = Date.now() , title = '' , body = '' , author = '' , category = '' , voteScore = 1, deleted = false, commentCount = 1 } ) => {
	
	return { type: ADD_POST,
		id,
		timestamp,
		title,
		body, //'Texto do post',
		author,
		category, //'pegar das existentes',
		voteScore,
		deleted,
		commentCount
	};
}

export const DEL_POST = 'DEL_POST';

export const deletePost = ( id ) => {
	
	return {
		type: DEL_POST,
		id
	}
}

export const EDIT_POST = 'EDIT_POST';

export const editPost = ( { id, title, body } ) => {

	return {
		type: EDIT_POST,
		id,
		title,
		body 
	}

}

export const LOAD_ALL = 'LOAD_ALL';

export const loadPosts = ( posts ) => {
	
	return {
		type: LOAD_ALL,
		posts
	}

}
