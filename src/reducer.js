import { combineReducers } from 'redux';
import { post } from './Posts/reducers'
import { category } from './Categories/reducers'

export default combineReducers({
	post,
	category,
});