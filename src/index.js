import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import { createStore, compose, applyMiddleware  } from 'redux';
import combineReducers from './reducer';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import { loadPostsEpic } from './Posts/actions';
import 'rxjs';

const epicMiddleware = createEpicMiddleware(loadPostsEpic);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( combineReducers, 
	composeEnhancers(
		applyMiddleware(epicMiddleware)
	)
);

ReactDOM.render(
	<Provider store={ store } >
		<BrowserRouter >
			<App />
		</BrowserRouter>
	</Provider>, document.getElementById('root'));

