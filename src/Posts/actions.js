export const ADD_POST = 'ADD_POST';

export const createPost = ( { title, body, author, category } ) => (
	{
		type: ADD_POST,
		timestamp: Date.now(),
		title,
		body, //'Texto do post',
		author,
		category, //'pegar das existentes',
		voteScore: 1,
		deleted: false
	}
)

export const DEL_POST = 'DEL_POST';

export const deletePost = ( id ) => (
	{
		type: DEL_POST,
		id
	}
)
