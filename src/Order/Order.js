import React, { Component } from 'react';

import { connect } from 'react-redux';
import { changeOrdenation } from './actions';

import 'bulma/css/bulma.css';

class Order extends Component{

	state = {
		order: [ { description: "Score", value: "-voteScore" } , { value: "-timestamp" ,description: "Date" }, { value: "author" ,description: "Author" } ]
	}

	changeOrder = ( element ) => {
		this.props.change( element.target.value );
	}

	render() {

		return (
			<div className="field">
				<div className="control">
					<label className="label">Selecione a Ordem: </label>
					<div className="select">
						<select name="order" onChange={ this.changeOrder } >
							{ this.state.order.map( ( { description, value} ) => (
								<option key={ value } value={ value } > { description } </option>
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

export default connect( mapStateToProps, mapDispatchToProps )( Order );