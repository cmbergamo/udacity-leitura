import { Observable } from 'rxjs/Observable';


const api = "http://localhost:3001"
let auth;
if ( !auth )
	auth = "cmb-2"



// Generate a unique token for storing your bookshelf data on the backend server.

const headers = {
	'Accept': 'application/json',
	'Authorization': auth
}

const ServerApi = {

getCategorias : () => {
	return fetch(`${ api }/categories/`, { headers })
		.then(res => res.json())
		.then(data => data.categories);
	},

getPostsFromCategory : ( category ) =>
	fetch(`${ api }/${ category }/posts`, { headers })
		.then(res => res.json()),

getPosts : () => {
	const req = fetch(`${ api }/posts`, { headers })
	.then(res => res.json())
	return Observable.from ( req ) },

createPost : ( { id, timestamp, title, body, author, category }  ) =>
	fetch(`${ api }/posts/`, {
			method: 'POST',
			headers: { ...headers,
				'Content-Type': 'application/json' },
			body: JSON.stringify( { id, timestamp, title, body, author, category } )
		}).then(res => res.json()),

getPostDetails : ( _id ) =>
	fetch(`${ api }/posts/${ _id }`, { headers })
		.then(res => res.json()),

votePost : ( _id, _vote ) =>
	fetch(`${ api }/posts/${ _id }`, {
		method: 'POST',
		headers: { ...headers,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify( { option: _vote > 0 ? 'upVote' : 'downVote' } )
	}).then(res => res.json()),

editPost : ( { id, title, body }  ) =>
	fetch(`${ api }/posts/${ id }`, {
		method: 'PUT',
		headers: { ...headers,
			'Content-Type': 'application/json' },
		body: JSON.stringify( { title, body } )
	}).then(res => res.json()),

deletePost : ( id ) =>
	fetch(`${ api }/posts/${ id }`, {
		method: 'DELETE',
		headers: { ...headers,
			'Content-Type': 'application/json' }
	}).then(res => res.json()),

getCommentsFromPost : ( post ) =>
	fetch(`${ api }/posts/${ post }/comments`, {
		headers: {
			...headers,
			'Content-Type': 'application/json'
		},
	}).then(res => res.json()),

addComment : ( { id, timestamp, body, author, parentId } ) =>
	fetch(`${ api }/comments`, {
		method: 'POST',
		headers: {
			...headers,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify( { id, timestamp, body, author, parentId } )
	}).then(res => res.json()),

getCommentDetails : ( _id ) =>
	fetch(`${ api }/comments/${ _id }`, { headers })
		.then(res => res.json()),

voteComment : ( _id, _vote ) =>
	fetch(`${ api }/comments/${ _id }`, {
			method: 'POST',
			headers: { ...headers,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify( { option: _vote > 0 ? 'upVote' : 'downVote' } )
		}).then(res => res.json()),

editComment : ( { id, timestamp, body }  ) =>
	fetch(`${ api }/comments/${ id }`, {
		method: 'PUT',
		headers: { ...headers,
			'Content-Type': 'application/json' },
		body: JSON.stringify( { timestamp, body } )
	}).then(res => res.json()),

deleteComment: ( id ) =>
	fetch(`${ api }/comments/${ id }`, {
		method: 'DELETE',
		headers: { ...headers,
			'Content-Type': 'application/json' }
	}).then(res => res.json())
}

export default ServerApi;