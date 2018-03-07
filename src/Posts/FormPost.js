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
			<Modal id="modal-post" submit={ ( _event ) => this.addPost( _event ) } button="Criar" title="Novo Post">
				<Input name="title" label="Título" placeholder="Título" />

				<Input name="author" label="Autor" placeholder="Nome do autor" />

				<CategoryList todas={ false } />

				<TextArea name="body" label="Mensagem" placeholder="Mensagem" />
			</Modal>
		)
	}

}

export default connect( )(FormPost);