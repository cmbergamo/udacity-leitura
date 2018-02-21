import React, { Component } from 'react';
import ListPosts from './Posts/ListPosts';
import Category from './Categories/Category';
import FormPost from './Posts/FormPost';

import * as ServerAPI from './api/ServerAPI';

import { Route } from 'react-router'

import { connect } from 'react-redux';
import { loadPosts } from './Posts/actions';

import 'bulma/css/bulma.css';
import 'mdi/css/materialdesignicons.css'

class App extends Component {

	/* state = {
		order: 'voteScore' // Pode ser 'voteScore' ou 'creationDate'
	}
 */
	showModalPost() {
		document.getElementById("modal-post").classList.add( "is-active" );
	}

	componentDidMount() {
		
		ServerAPI.getPosts().then( posts => {

				this.props.initializePost( posts );
			
		} );

	}

	render() {

		return (
			<div className="container">
				<section className="hero is-dark">
					<div className="hero-body">
						<div className="container">
							<h1 className="title">
								Projeto Leitura
							</h1>
						</div>
					</div>
				</section>
				<Route path="/:category" render={ obj => {
					return (
						<Category params={ obj.match.params } />
					);
				 } } />
				
				<Route exact path="/" component={ ListPosts } />

				<FormPost />
			</div>
		);
	}
}

function mapStateToProps( currentState, props ) {

	return null;
	
}

function mapDispatchToProps( dispatch ) {
	return {
		initializePost: ( posts ) => dispatch( loadPosts( posts ) )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
