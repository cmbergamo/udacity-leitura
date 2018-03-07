// import { Observable } from 'rxjs/Observable';
import { ajax } from 'rxjs/observable/dom/ajax';


const api = "http://localhost:3001"
let auth;
if ( !auth )
	auth = "cmb-2"

const headers = {
	'Accept': 'application/json',
	'Authorization': auth
}

export const ServerApi = {

	getCategorias : () => {
		return fetch( `${ api }/categories/`, { headers } ).then( res => res.json() )
	},

	getPostsFromCategory : ( category ) => {
		return ajax( {
			url:  `${ api }/${ category }/posts`, 
			headers
		} )
	},

	getPosts : () => {
		return ajax( {
			url: `${ api }/posts`,
			headers
		} )
	},

	createPost : ( _post  ) =>
		ajax.post(`${ api }/posts/`,
			_post,
			{
				...headers,
				'Content-Type': 'application/json'
			}
		),

	getPostDetails : ( _id ) =>
		fetch(`${ api }/posts/${ _id }`, { headers })
			.then(res => res.json()),

	votePost : ( _id, _vote ) =>
		ajax.post(`${ api }/posts/${ _id }`,
		{ option: _vote > 0 ? 'upVote' : 'downVote' },
		{
			...headers,
			'Content-Type': 'application/json'
		}),

	editPost : ( { id, title, body }  ) => 
		ajax.put(`${ api }/posts/${ id }`, { title, body }, {
			 ...headers,
				'Content-Type': 'application/json' },
		),

	deletePost : ( id ) =>
		ajax.delete(`${ api }/posts/${ id }`,
			{
				...headers,
				'Content-Type': 'application/json'
			}
		),

	getCommentsFromPost : ( post ) => {
		return ajax( {
				url:`${ api }/posts/${ post }/comments`,
				headers: {
					...headers,
					'Content-Type': 'application/json'
				}
		} )
	},

	addComment : ( { id, timestamp, body, author, parentId } ) =>
		ajax.post(`${ api }/comments`, { id, timestamp, body, author, parentId },
		{
			...headers,
			'Content-Type': 'application/json'
		}),

	getCommentDetails : ( _id ) =>
		fetch(`${ api }/comments/${ _id }`, { headers })
			.then(res => res.json()),

	voteComment : ( _id, _vote ) =>
		ajax.post(`${ api }/comments/${ _id }`,
			{ option: _vote > 0 ? 'upVote' : 'downVote' },
			{
				...headers,
				'Content-Type': 'application/json'
			}
		),

	editComment : ( { id, timestamp, body }  ) =>
		fetch(`${ api }/comments/${ id }`, {
			method: 'PUT',
			headers: { ...headers,
				'Content-Type': 'application/json' },
			body: JSON.stringify( { timestamp, body } )
		}).then(res => res.json()),

	deleteComment: ( id ) =>
		ajax.delete(`${ api }/comments/${ id }`,
			{...headers,
				'Content-Type': 'application/json'
			}
		)
}

export default ServerApi;