import React, { Component } from 'react';
import Post from './Posts/Post';
import Category from './Categories/Category';
import FormPost from './Posts/FormPost';

import * as ServerAPI from './api/ServerAPI';
import sortBy from 'sort-by';

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
		const modal = document.getElementById("modal-post");
		modal.setAttribute( "class", modal.getAttribute("class") + " is-active" );
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
				<div className="notification">
					<Category todas={ true } />
				</div>
				
				<div  className="media">
					<div className="media-left">
					</div>
					
					<div className="media-content">
				   		{ this.props.posts && this.props.posts.map( post => ( <Post id={ post.id }  key={ post.id } /> ) ) }
					</div>

					<div className="media-right">
						<button className="button is-medium modal-button" data-target="modal-post" onClick={this.showModalPost} >
							<span className="icon is-small">
								<i className='mdi mdi-plus-circle'></i>
							</span>
						</button>
					</div>
				</div>

				<FormPost />
			</div>
		);
	}
}

function mapStateToProps( currentState, props ) {

	const { posts = [] , category = '' } = currentState;

	if ( category === undefined || category === '' ) {
		posts.sort( sortBy('voteScore') );

		return  { posts , category } ;

	} else {

		const visiblePosts = posts.filter( ( p ) => {
			return p.category === category
		});
		
		visiblePosts.sort( sortBy('voteScore') );

		return  { posts: visiblePosts ,
			category } ;
	}
}

function mapDispatchToProps( dispatch ) {
	return {
		initializePost: ( posts ) => dispatch( loadPosts( posts ) )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
