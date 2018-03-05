import React, { Component } from 'react';
import ListPosts from '../Posts/ListPosts';
import CategoryList from './CategoryList';
import Order from '../Order/Order';

import { connect } from 'react-redux';

import { changeSelectedCategory } from './actions';

class Category extends Component {
	
	componentWillMount() {

		if (  this.props.params.category !== this.props.category ) {

			if ( this.props.params.category !== "todas" )
				this.props.trocaCategoria( this.props.params.category );
			else
				this.props.trocaCategoria( '' );
		}
		
	}

	render () {
		return (
			<section className="section is-paddingless">
				<div className="notification">
					<CategoryList className="is-flex  is-left" todas={ true } />
					<Order className="is-flex is-right" />
				</div>
				<ListPosts />
			</section>
		);
	}
}

function mapStateToProps( currentState, props ) {

	return { category: currentState.category };
}

function mapDispatcToProps ( dispatch ) {
	return { 
		trocaCategoria: ( cat ) => dispatch( changeSelectedCategory( cat ) )
	}
}

export default connect( mapStateToProps, mapDispatcToProps )(Category);