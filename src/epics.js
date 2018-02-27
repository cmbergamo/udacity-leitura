import ServerAPI from './api/ServerAPI';
import { ajax } from 'rxjs/observable/dom/ajax';
import * as PostActions from './Posts/actions.js';

export const loadPostsEpic = ( action$, store ) => {
	return action$.ofType( PostActions.LOAD_ALL )
		.mergeMap( action =>  {
			return ServerAPI.getPosts().map( p =>  { 
				return {type: PostActions.LOAD_ALL_REP, posts: p.response } } )
		} );
}