import React, { Component } from 'react';
import TextArea from '../Components/TextArea';
import Modal from '../Components/Modal';

import { connect } from 'react-redux';
import { editComment } from './actions';

import ServerAPI from '../api/ServerAPI';

class FormEditComment extends Component {

	editComment = ( _event ) => {
		_event.preventDefault();
		document.getElementById("buttonModal").classList.add("is-loading");

		const form = _event.target;

		let obj = { };

		for ( let data of form ){
			if ( data.name )
				obj[ data.name ] =  data.value ;
		}

		obj.timestamp = new Date().getTime();

		ServerAPI.editComment( obj ).then( resp => {
			
			this.props.dispatch( editComment( resp ) );
			document.getElementById("buttonModal").classList.remove("is-loading");
		} );

	}

	render() {
		return (
			<Modal objId="modal-comment" submit={ ( _event ) => this.editComment( _event ) } objButton="Editar" title="Edita Comentário">
				<TextArea objName="body" objLabel="Mensagem" objPlaceholder="Mensagem" />

				<input name="id" type="hidden" />
			</Modal>
		);
	}

}

export default connect( )( FormEditComment );