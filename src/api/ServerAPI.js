
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

export const getPost = ( post )  =>
	fetch(`${ api }/posts/${ post }`, { headers })
		.then(res => res.json())

export const update = (book, shelf) =>
	fetch(`${ api }/books/${ book.id }`, {
		method: 'PUT',
		headers: {
			...headers,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ shelf })
	}).then(res => res.json())

export const search = (query, maxResults) =>
	fetch(`${ api }/search`, {
		method: 'POST',
		headers: {
			...headers,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ query, maxResults })
	}).then(res => res.json())
		.then(data => data.books)
