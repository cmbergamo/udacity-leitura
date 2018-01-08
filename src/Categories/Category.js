import React, { Component } from 'react';
import * as ServerAPI from '../api/ServerAPI';
import 'bulma/css/bulma.css';

class Category extends Component{
	state = {
		categories: []
	}

	changeCategory = ( element ) => {
		console.log( element.target.value );
	}

	componentDidMount() {
		ServerAPI.getCategorias().then( data =>
			this.setState( { categories: data } )
		);
	}

	render() {

		return (
			<div className="select">
				<select onChange={ this.changeCategory } defaultValue=''>
					<option value='' disabled>Selecione a Categoria</option>
					{ this.state.categories.map( ( { name, path } ) => (
						<option key={ path } value={ path } > { name } </option>
					) ) }
				</select>
			</div>
		)

	}

}

export default Category;