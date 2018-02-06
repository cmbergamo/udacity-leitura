import { combineReducers } from 'redux';
import { posts } from './Posts/reducers'
import { category } from './Categories/reducers'

export default combineReducers({
	posts,
	category,
});