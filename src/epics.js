import { combineEpics } from 'redux-observable';
import ServerAPI from './api/ServerAPI';
// import { ajax } from 'rxjs/observable/dom/ajax';
import * as PostsActions from './Posts/actions.js';
import * as CommentsActions from './Comments/actions.js';

export const loadPostsEpic = ( action$, store ) => {
	return action$.ofType( PostsActions.LOAD_ALL )
		.mergeMap( action =>  {
			return ServerAPI.getPosts().map( p =>  { 
				return {type: PostsActions.LOAD_ALL_REP, posts: p.response } } )
		} );
}

export const initCommentsEpic = ( action$, store ) => {
	return action$.ofType( CommentsActions.INIT_COMMENTS )
		.mergeMap( action => {
			return ServerAPI.getCommentsFromPost(action.post).map( p =>  { 
				return {type: CommentsActions.INIT_COMMENTS_REP, comments: p.response } } )
		})
}

export const editPostsEpic = ( action$, store ) => {
	return action$.ofType( PostsActions.EDIT_POST )
		.mergeMap( action => {
			return ServerAPI.editPost( action.post ).map( p =>  { 
				return {type: PostsActions.EDIT_POST_REP, post: p.response } } )
		})
}

export const voteCommentsEpic = ( action$, store ) => {
	return action$.ofType( CommentsActions.VOTE_COMMENT )
		.mergeMap( action => {
			return ServerAPI.voteComment( action.comment, action.vote ).map( p =>  {
				return {type: CommentsActions.EDI_COMMENT_REP, comment: p.response } } )
		})
}

export const delCommentsEpic = ( action$, store ) => {
	return action$.ofType( CommentsActions.DEL_COMMENT )
		.mergeMap( action => {
			return ServerAPI.deleteComment( action.comment ).map( p =>  {
				return {type: CommentsActions.DEL_COMMENT_REP, comment: p.response } } )
		})
}

export const addCommentsEpic = ( action$, store ) => {
	return action$.ofType( CommentsActions.ADD_COMMENT )
		.mergeMap( action => {
			return ServerAPI.addComment( action.comment ).map( p =>  {
				return {type: CommentsActions.ADD_COMMENT_REP, comment: p.response } } )
		})
}

export const createPostEpic = ( action$, store ) => {
	return action$.ofType( PostsActions.ADD_POST )
		.mergeMap( action => {
			return ServerAPI.createPost( action.post ).map( p =>  {
				return {type: PostsActions.ADD_POST_REP, post: p.response } } )
		})
}

export const votePostEpic = ( action$, store ) => {
	return action$.ofType( PostsActions.VOTE_POST )
		.mergeMap( action => {
			return ServerAPI.votePost( action.post, action.vote ).map( p =>  {
				return {type: PostsActions.EDIT_POST_REP, post: p.response } } )
		})
}

export const delPostEpic = ( action$, store ) => {
	return action$.ofType( PostsActions.DEL_POST )
		.mergeMap( action => {
			return ServerAPI.deletePost( action.id ).map( p =>  {
				return {type: PostsActions.DEL_POST_REP, post: p.response } } )
		})
}


const rootEpic = combineEpics(
	loadPostsEpic,
	editPostsEpic,
	createPostEpic,
	votePostEpic,
	delPostEpic,
	initCommentsEpic,
	voteCommentsEpic,
	delCommentsEpic,
	addCommentsEpic
  );

  export default rootEpic;