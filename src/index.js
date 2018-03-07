import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import { createStore, compose, applyMiddleware  } from 'redux';
import combineReducers from './reducer';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './epics';
import 'rxjs';

const epicMiddleware = createEpicMiddleware(rootEpic);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( combineReducers, 
	composeEnhancers(
		applyMiddleware(epicMiddleware)
	)
);

ReactDOM.render(
	<Provider store={ store } >
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>, document.getElementById('root'));

