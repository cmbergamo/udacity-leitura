import { combineReducers } from 'redux';
import { postReducer } from './Posts/reducers'
import { categoryReducer } from './Categories/reducers'

export default combineReducers({
	postReducer,
	categoryReducer,
  });