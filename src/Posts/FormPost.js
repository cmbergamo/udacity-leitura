import React, { Component } from 'react';
import CategoryList from '../Categories/CategoryList';
import Input from '../Components/Input';
import TextArea from '../Components/TextArea';
import Modal from '../Components/Modal';

import { generateUUID } from '../utils/utils';

import { connect } from 'react-redux';
import { createPost } from './actions';

import 'bulma/css/bulma.css';
import 'mdi/css/materialdesignicons.css'

class FormPost extends Component {

	addPost = ( _event ) => {
		_event.preventDefault();
		document.getElementById("buttonModal").classList.add("is-loading");
		
		const form = _event.target;
		
		let obj = { }

		for ( let data of form ){
			if ( data.name )
				obj[ data.name ] =  data.value ;
		}

		obj.id = generateUUID();
		obj.timestamp = new Date().getTime();

		this.props.dispatch( createPost( obj ) );
		document.getElementById("buttonModal").classList.remove("is-loading");
	}
	
	render ( ) {
		return (
			<Modal objId="modal-post" submit={ ( _event ) => this.addPost( _event ) } objButton="Criar" title="Novo Post">
				<Input objName="title" objLabel="Título" objPlaceholder="Título" />

				<Input objName="author" objLabel="Autor" objPlaceholder="Nome do autor" icon />

				<CategoryList todas={ false } />

				<TextArea objName="body" objLabel="Mensagem" objPlaceholder="Mensagem" />
			</Modal>
		)
	}

}

export default connect( )(FormPost);