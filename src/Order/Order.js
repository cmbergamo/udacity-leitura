import React, { Component } from 'react';
import * as ServerAPI from '../api/ServerAPI';

import { connect } from 'react-redux';
import { changeOrdenation } from './actions';

import 'bulma/css/bulma.css';

class Order extends Component{

	state = {
		order: { voteScore: "Score", timestamp: "Date", author: "Autor" }
	}

	changeOrder = ( element ) => {
		this.props.change( element.target.value );
	}

	render() {

		return (
			<div className="field">
				<div className="control">
					<label className="label">Selecione a Categoria: </label>
					<div className="select">
						<select name="order" onChange={ this.changeOrder } >
							{ this.state.order.map( ( item ) => (
								<option key={ } value={ path } selected={ path === this.props.order } > { name } </option>
							) ) }
						</select>
					</div>
				</div>
			</div>
		)

	}

}

function mapStateToProps(currentState, props ) {
	return  { order: currentState.order } ;
}

function mapDispatchToProps( dispatch ) {
	return {
		change: ( order ) => dispatch( changeOrdenation( order ) )
	}
}

export default connect( mapStateToProps, mapDispatchToProps )( Category );