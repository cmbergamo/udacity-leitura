import React, { Component } from 'react';
import Input from '../Components/Input';
import TextArea from '../Components/TextArea';

import { connect } from 'react-redux';
import { addComment } from './actions';

import { generateUUID } from '../utils/utils';

class FormComment extends Component {

	createComment = ( _event ) => {
		_event.preventDefault();
		document.getElementById("buttonModal").classList.add("is-loading");

		const form = _event.target;

		let obj = { };

		for ( let data of form ){
			if ( data.name )
				obj[ data.name ] =  data.value ;
		}

		obj.timestamp = new Date().getTime();
		obj.id = generateUUID();

		this.props.dispatch( addComment( obj ) );
		document.getElementById("buttonModal").classList.remove("is-loading");
		
	}

	render() {
		return (
			<div>
				<form onSubmit={ this.createComment }>
					<section className="modal-card-body">
					
						<Input objName="author" objLabel="Autor" objPlaceholder="Nome do autor" icon />

						<TextArea objName="body" objLabel="Mensagem" objPlaceholder="Mensagem" />

						<input type="hidden" name="parentId" defaultValue={ this.props.parentId } />

					</section>
					<footer className="modal-card-foot">
						<button type="submit" id="criaComment" className="button is-success" >Criar</button>
					</footer>
				</form>
			</div>
		);
	}

}

export default connect( )( FormComment );