import { combineReducers } from 'redux';
import { posts } from './Posts/reducers';
import { category } from './Categories/reducers';
import { comments } from './Comments/reducers'

export default combineReducers({
	posts,
	category,
	comments
});