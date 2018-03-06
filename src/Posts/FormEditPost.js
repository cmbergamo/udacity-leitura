import React, { Component } from 'react';

import * as ServerAPI from '../api/ServerAPI';

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
		document.getElementById("editPost").classList.add("is-loading");
		
		const form = _event.target;
		
		let obj = { }

		for ( let data of form ){
			if ( data.name )
				obj[ data.name ] =  data.value ;
		}

		ServerAPI.editPost( obj ).then( resp => {
			this.props.dispatch( editPost( resp ) );
			document.getElementById("editPost").classList.remove("is-loading");
		} );
	}
	
	render ( ) {
		return (
			<div className="modal" id="modal-editPost" >
				<div className="modal-background" onClick={ this.closeModalPost } ></div>
				<div className="modal-card">
					<form onSubmit={ this.addPost } >
						<header className="modal-card-head">
							<p className="modal-card-title">Edit Post</p>
							<button type="button" className="delete" aria-label="close" onClick={ this.closeModalPost } ></button>
						</header>
						<section className="modal-card-body">
							<div className="field">
								<label className="label">Título</label>
								<div className="control">
									<input name="title" className="input" type="text" placeholder="Título" />
								</div>
							</div>

							<div className="field">
								<label className="label">Mensagem</label>
								<div className="control">
									<textarea name="body" className="textarea" placeholder="Mensagem"></textarea>
								</div>
							</div>

							<input name="id" type="hidden" />
						</section>
						<footer className="modal-card-foot">
							<button type="submit" id="editPost" className="button is-success" >Editar</button>
						</footer>
					</form>
				</div>
			</div>

		)
	}

}

export default connect( )(FormEditPost);