import React, { Component } from 'react';
import Input from '../Components/Input';
import TextArea from '../Components/TextArea';
import Modal from '../Components/Modal';

import { connect } from 'react-redux';
import { editPost } from './actions';

import 'bulma/css/bulma.css';
import 'mdi/css/materialdesignicons.css'

class FormEditPost extends Component {

	closeModalPost = () => {
		document.getElementById("modal-editPost").classList.remove( "is-active" );
	}

	addPost = ( _event ) => {
		_event.preventDefault();
		document.getElementById("buttonModal").classList.add("is-loading");
		
		const form = _event.target;
		
		let obj = { }

		for ( let data of form ){
			if ( data.name )
				obj[ data.name ] =  data.value ;
		}

		this.props.dispatch( editPost( obj ) );
		document.getElementById("buttonModal").classList.remove("is-loading");
	}
	
	render ( ) {
		return (
			<Modal objId="modal-editPost" submit={ ( _event ) => this.addPost( _event ) } objButton="Editar" title="Edit Post">
				<Input objName="title" objLabel="Título" objPlaceholder="Título" />

				<TextArea objName="body" objLabel="Mensagem" objPlaceholder="Mensagem" />

				<input name="id" type="hidden" />
			</Modal>
		)
	}

}

export default connect( )(FormEditPost);