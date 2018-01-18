import React, { Component } from 'react';
import * as ServerAPI from '../api/ServerAPI';
import { connect } from 'react-redux';
import { changeSelectedCategory } from './actions';
import 'bulma/css/bulma.css';

class Category extends Component{
	state = {
		categories: []
	}

	changeCategory = ( element ) => {
		const category = element.target.value;
		this.props.change( { category } );
	}

	componentDidMount() {
		ServerAPI.getCategorias().then( data =>
			this.setState( { categories: data } )
		);
	}

	render() {

		return (
			<div className="select">
				<select onChange={ this.changeCategory } defaultValue={ this.props.selectedCategory }>
					<option value='' disabled>Selecione a Categoria</option>
					{ this.state.categories.map( ( { name, path } ) => (
						<option key={ path } value={ path } > { name } </option>
					) ) }
				</select>
			</div>
		)

	}

}

function mapStateToProps(currentState, props ) {
	return  { selectedCategory: currentState.selectedCategory } ;
}

function mapDispatchToProps( dispatch ) {
	return {
		change: ( cat ) => dispatch( changeSelectedCategory( cat ) )
	}
}

export default connect( mapStateToProps, mapDispatchToProps )( Category );