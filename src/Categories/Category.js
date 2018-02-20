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
		this.props.change( element.target.value );
	}

	componentDidMount() {
		ServerAPI.getCategorias().then( data =>
			this.setState( { categories: data } )
		);
	}

	render() {

		return (
			<div className="field">
				<div className="control">
					<label className="label">Selecione a Categoria: </label>
					<div className="select">
						<select name="category" onChange={ this.changeCategory } value={ this.props.selectedCategory } >
							{ this.props.todas && (	<option value='' className="has-text-weight-bold">Todas</option> ) }
							{ this.state.categories.map( ( { name, path } ) => (
								<option key={ path } value={ path } > { name } </option>
							) ) }
						</select>
					</div>
				</div>
			</div>
		)

	}

}

function mapStateToProps(currentState, props ) {
	return  { selectedCategory: currentState.category } ;
}

function mapDispatchToProps( dispatch ) {
	return {
		change: ( cat ) => dispatch( changeSelectedCategory( cat ) )
	}
}

export default connect( mapStateToProps, mapDispatchToProps )( Category );