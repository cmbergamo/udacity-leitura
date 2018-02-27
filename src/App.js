import React, { Component } from 'react';
import ListPosts from './Posts/ListPosts';
import Category from './Categories/Category';

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
	componentDidMount() {
		this.props.initializePost( );
		
		/* ServerAPI.getPosts().then( posts => {

				this.props.initializePost( posts );
			
		} ); */

	}

	render() {

		return (
			<div className="container">
				<section className="section">
						<div className="container">
							<h1 className="title">
								Projeto Leitura
							</h1>
						</div>
				</section>
				<Route path="/:category" render={ obj => {
					return (
						<Category params={ obj.match.params } />
					);
				 } } />
				
				<Route exact path="/" component={ ListPosts } />

			</div>
		);
	}
}

function mapDispatchToProps( dispatch ) {
	return {
		initializePost: ( posts ) => dispatch( loadPosts( posts ) )
	}
}

export default connect( null, mapDispatchToProps)(App);
