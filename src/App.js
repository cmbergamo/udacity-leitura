import React, { Component } from 'react';
import ListPosts from './Posts/ListPosts';
import Category from './Categories/Category';
import Post from './Posts/Post';

import * as ServerAPI from './api/ServerAPI';

// import { Route } from 'react-router'
import { Route, Link, withRouter } from 'react-router-dom'

import { connect } from 'react-redux';
import { loadPosts } from './Posts/actions';
import { changeSelectedCategory } from './Categories/actions';
import { changeOrdenation } from './Order/actions';

import 'bulma/css/bulma.css';
import 'mdi/css/materialdesignicons.css'

class App extends Component {

	state = {
		categories: [] // Pode ser 'voteScore' ou 'creationDate'
	}

	componentDidMount() {
		
		ServerAPI.getPosts().then( posts => {

				this.props.initializePost( posts );
			
		} );

		ServerAPI.getCategorias().then( data => {
			this.setState( { categories: data } )
		} );

	}

	selecionaCategoria = ( cat ) => {
		this.props.selecionaCat( cat );
	}

	selecionaOrdem = ( ordem ) => {
		this.props.selecionaOrdem( ordem );
	}

	render() {

		return (
			<div className="container">
				<section className="section">
					<nav className="navbar" aria-label="dropdown navigation">
						<div className="navbar-start">
							<h1 className="title">
								<Link to="/" >Projeto Leitura</Link>
							</h1>
						</div>
						<div className="navbar-item has-dropdown is-hoverable">
							<span className="navbar-link">
								Categorias
							</span>

							<div className="navbar-dropdown">
								<Link to="/todas" className="navbar-item" onClick={ () => this.selecionaCategoria( "" ) } >Todas</Link>
								{ this.state.categories.map( cat => ( <Link key={ cat.path } to={ "/" + cat.path } className="navbar-item" onClick={ () => this.selecionaCategoria( cat.path ) } >{ cat.name }</Link> ) ) }
							</div>
						</div>
						<div className="navbar-item has-dropdown is-hoverable">
							<a className="navbar-link">
								Ordenação
							</a>

							<div className="navbar-dropdown">
								<a className="navbar-item" onClick={ () => this.selecionaOrdem( "-voteScore" ) } >
									Score
								</a>
								<a className="navbar-item" onClick={ () => this.selecionaOrdem( "-timestamp" ) } >
									Date
								</a>
								<a className="navbar-item" onClick={ () => this.selecionaOrdem( "author" ) } >
									Author
								</a>
							</div>
						</div>
					</nav>
						<div className="container">
							
						</div>
				</section>
				<Route exact path="/:category" render={ obj => {
					return (
						<Category params={ obj.match.params } />
					);
				 } } />

				 <Route exact path="/:category/:id" component={ Post } />
				
				<Route exact path="/" component={ ListPosts } />

			</div>
		);
	}
}

function mapDispatchToProps( dispatch ) {
	return {
		initializePost: ( posts ) => dispatch( loadPosts( posts ) ),
		selecionaCat: ( cat ) => dispatch( changeSelectedCategory( cat ) ),
		selecionaOrdem: ( ordem ) => dispatch( changeOrdenation( ordem ) )
	}
}

export default withRouter( connect( null, mapDispatchToProps)(App) );
