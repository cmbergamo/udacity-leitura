export const ADD_POST = 'ADD_POST';

//export const createPost = ( { title, body, author, category } ) => {
export const createPost = ( { id = 0, timestamp = Date.now() , title = '' , body = '' , author = '' , category = '' , voteScore = 1, deleted = false, commentCount = 1 } ) => {
	
	const postAction = {
		type: ADD_POST,
		id,
		timestamp,
		title,
		body, //'Texto do post',
		author,
		category, //'pegar das existentes',
		voteScore,
		deleted,
		commentCount
	}

	return postAction;
}

export const DEL_POST = 'DEL_POST';

export const deletePost = ( id ) => (
	{
		type: DEL_POST,
		id
	}
)
