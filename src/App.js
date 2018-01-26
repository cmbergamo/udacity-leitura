import React, { Component } from 'react';
import Post from './Posts/Post';
import Category from './Categories/Category';
import FormPost from './Posts/FormPost';
import * as ServerAPI from './api/ServerAPI';
import { connect } from 'react-redux';
import { createPost } from './Posts/actions';
import sortBy from 'sort-by';
import 'bulma/css/bulma.css';
import 'mdi/css/materialdesignicons.css'

class App extends Component {

	state = {
		categories: [],
		posts: [],
		order: 'voteScore' // Pode ser 'voteScore' ou 'creationDate'
	}

	componentDidMount() {
		
		 ServerAPI.getPosts().then( posts => {

			posts.forEach( post => {
				//console.log( post );
				this.props.initializePost( post );
			});
			
			this.setState( state => {
				return {
					...state,
					posts
				}
			}
			)
		 } );

	}

	render() {
		let posts = [];

		if ( this.props.posts )
			posts = this.props.posts.sort( sortBy('voteScore') );

		return (
			<div className="container">
				<section className="hero is-dark">
					<div className="hero-body">
						<div className="container">
							<h1 className="title">
								Projeto Leitura
							</h1>
							<h2 className="subtitle">
								Hero subtitle
							</h2>
						</div>
					</div>
				</section>
				<div className="notification">
					Selecione a categoria: 
					<Category />
				</div>
				
				<div  className="media">
					<div className="media-left">
					</div>
					
					<div className="media-content">
						
				   		{ posts.map( post => (
							   <Post id={ post.id }  key={ post.id } />
						   ) )
						}

					</div>

					<div className="media-right">
						<button className="add">
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

function mapStateToProps(currentState, props ) {

	const { post = {} , category = {} } = currentState;

	

	if ( category && category.category === '' ) {

		return  { posts: post.posts, category } ;

	} else {

		const visiblePosts = post.posts.filter( ( p ) => {
			return p.category === category.category
		});
		

		return  { posts: visiblePosts,
			category } ;
	}
}

function mapDispatchToProps( dispatch ) {
	return {
		initializePost: ( post ) => dispatch( createPost( post ) )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
