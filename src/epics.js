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
			console.log( action );
			return ServerAPI.editPost( action.post ).map( p =>  { 
				console.log( p.response );
				return {type: PostsActions.EDIT_POST_REP, comments: p.response } } )
		})
}


const rootEpic = combineEpics(
	loadPostsEpic,
	initCommentsEpic,
	editPostsEpic
  );

  export default rootEpic;