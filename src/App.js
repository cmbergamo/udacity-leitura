import React, { Component } from 'react';
import Post from './Posts/Post';
import Category from './Categories/Category';
import * as ServerAPI from './api/ServerAPI';
import { connect } from 'react-redux';
import { createPost } from './Posts/actions';
import 'bulma/css/bulma.css';

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
				
				{/* <div className="App-intro">
					{ this.state.categories.map( category => ( <p key={category.path} > {category.name} => {category.path} </p> ) ) }
				   </div> */}
				<div  className="media">
					<div className="media-left">
					</div>
					
					<div className="media-content">
						<div className="App-intro">
							{ this.state.posts.map( post => ( <p key={post.id} > {post.body}</p> ) ) }
						</div>

				   		{ this.props.posts.map( post => (
							   <Post post={ post } />
						   ) )
						}

					</div>

					<div className="media-right">
						<button className="add"></button>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(currentState, props ) {
	if ( currentState  && currentState.posts ) {
		const { posts, selectedCategory } = currentState;

		const visiblePosts = posts.filter( ( post ) => {
			return post.category === selectedCategory
		});

		return  { posts: visiblePosts,
			selectedCategory: currentState.selectedCategory } ;
	} else {
		return { posts: [], selectedCategory: '' };
	}
}

function mapDispatchToProps( dispatch ) {
	return {
		initializePost: ( post ) => dispatch( createPost( post ) )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
