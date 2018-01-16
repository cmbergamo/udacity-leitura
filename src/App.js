import React, { Component } from 'react';
import Post from './Posts/Post';
import Category from './Categories/Category';
import * as ServerAPI from './api/ServerAPI';
import { connect } from 'react-redux';
import 'bulma/css/bulma.css';

class App extends Component {

	state = {
		categories: [],
		posts: [],
		order: 'voteScore' // Pode ser 'voteScore' ou 'creationDate'
	}

	componentDidMount() {
		ServerAPI.getCategorias().then( data =>
			this.setState( state => {
				return {
					...state,
					categories: data
				}
			}
		 ) );

		 ServerAPI.getPosts().then( posts => {
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
						<Post />
						<Post />
						<Post />
						<Post />
					</div>

					<div className="media-right">
						<button className="add"></button>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(currentState, ) {
	return currentState.posts;
}

export default connect()(App);
