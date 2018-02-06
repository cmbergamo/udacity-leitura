import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import combineReducers from './reducer';
import { Provider } from 'react-redux';

const store = createStore( combineReducers );

ReactDOM.render(
	<Provider store={ store } >
		<App />
	</Provider>, document.getElementById('root'));

