import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, compose } from 'redux';
import combineReducers from './reducer';
import { Provider } from 'react-redux';

const store = createStore( combineReducers, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose );

ReactDOM.render(
	<Provider store={ store } >
		<App />
	</Provider>, document.getElementById('root'));

