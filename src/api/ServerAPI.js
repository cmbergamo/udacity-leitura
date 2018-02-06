
const api = "http://localhost:3001"
const auth = "cmb-" + Math.random().toString(36).substr(-8)


// Generate a unique token for storing your bookshelf data on the backend server.

const headers = {
	'Accept': 'application/json',
	'Authorization': auth
}

export const getCategorias = () =>
	fetch(`${ api }/categories/`, { headers })
		.then(res => res.json())
		.then(data => data.categories)

export const getPostsFromCategory = ( category ) =>
	fetch(`${ api }/${ category }/posts`, { headers })
		.then(res => res.json())

export const getPosts = () =>
	fetch(`${ api }/posts`, { headers })
		.then(res => res.json())

export const createPost = ( { id, timestamp, title, body, author, category }  ) =>
	fetch(`${ api }/posts/`, {
			method: 'POST',
			headers: { ...headers,
				'Content-Type': 'application/json' },
			body: JSON.stringify( { id, timestamp, title, body, author, category } )
		}).then(res => res.json())

export const getPostDetails = ( _id ) =>
	fetch(`${ api }/posts/${ _id }`, { headers })
		.then(res => res.json())

export const votePost = ( _id, _vote ) =>
	fetch(`${ api }/posts/${ _id }`, {
		method: 'POST',
		headers: { ...headers,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify( { option: _vote > 0 ? 'upVote' : 'downVote' } )
	}).then(res => res.json())

export const editPost = ( { id, title, body }  ) =>
	fetch(`${ api }/posts/${ id }`, {
		method: 'PUT',
		headers: { ...headers,
			'Content-Type': 'application/json' },
		body: JSON.stringify( { title, body } )
	}).then(res => res.json())

export const deletePost = ( id ) =>
	fetch(`${ api }/posts/${ id }`, {
		method: 'DELETE',
		headers: { ...headers,
			'Content-Type': 'application/json' }
	}).then(res => res.json())

export const getCommentsFromPost = ( post ) =>
	fetch(`${ api }/posts/${ post }/comments`, {
		headers: {
			...headers,
			'Content-Type': 'application/json'
		},
	}).then(res => res.json())

export const addComment = ( { id, timestamp, body, author, parentId } ) =>
	fetch(`${ api }/comments`, {
		method: 'POST',
		headers: {
			...headers,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify( { id, timestamp, body, auth, parentId } )
	}).then(res => res.json())

export const getCommentDetails = ( _id ) =>
	fetch(`${ api }/comments/${ _id }`, { headers })
		.then(res => res.json())

export const voteComment = ( _id, _vote ) =>
	fetch(`${ api }/comments/${ _id }`, {
			method: 'POST',
			headers: { ...headers,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify( { option: _vote > 0 ? 'upVote' : 'downVote' } )
		}).then(res => res.json())

export const editComment = ( { id, timestamp, body }  ) =>
	fetch(`${ api }/comments/${ id }`, {
		method: 'PUT',
		headers: { ...headers,
			'Content-Type': 'application/json' },
		body: JSON.stringify( { timestamp, body } )
	}).then(res => res.json())

export const deleteComment = ( id ) =>
	fetch(`${ api }/comments/${ id }`, {
		method: 'DELETE',
		headers: { ...headers,
			'Content-Type': 'application/json' }
	}).then(res => res.json())
