import React, { Component } from 'react';
import CategoryList from '../Categories/CategoryList';

import * as ServerAPI from '../api/ServerAPI';
import { generateUUID } from '../utils/utils';

import { connect } from 'react-redux';
import { createPost } from './actions';

import 'bulma/css/bulma.css';
import 'mdi/css/materialdesignicons.css'

class FormPost extends Component {

	closeModalPost = () => {
		document.getElementById("modal-post").classList.remove( "is-active" );
	}

	addPost = ( _event ) => {
		_event.preventDefault();
		
		const form = _event.target;
		
		let obj = { }

		for ( let data of form ){
			if ( data.name )
				obj[ data.name ] =  data.value ;
		}

		obj.id = generateUUID();
		obj.timestamp = new Date().getTime();

		console.log( obj );

		ServerAPI.createPost( obj ).then( resp => {
			this.props.dispatch( createPost( resp ) );
			document.getElementById("criaPost").classList.remove("is-loading");
		} );
	}
	
	render ( ) {
		return (
			<div className="modal" id="modal-post" >
				<div className="modal-background" onClick={ this.closeModalPost } ></div>
				<div className="modal-card">
					<form onSubmit={ this.addPost } >
						<header className="modal-card-head">
							<p className="modal-card-title">Novo Post</p>
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
								<label className="label">Autor</label>
								<div className="control has-icons-left">
									<input name="author" className="input" type="text" placeholder="Nome do autor" />
									<span className="icon is-small is-left">
										<i className="mdi mdi-account"></i>
									</span>
								</div>
							</div>

							<CategoryList todas={ false } />

							<div className="field">
								<label className="label">Mensagem</label>
								<div className="control">
									<textarea name="body" className="textarea" placeholder="Mensagem"></textarea>
								</div>
							</div>

						</section>
						<footer className="modal-card-foot">
							<button type="submit" id="criaPost" className="button is-success" >Criar</button>
						</footer>
					</form>
				</div>
			</div>

		)
	}

}

export default connect( )(FormPost);