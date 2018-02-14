import React, { Component } from 'react';
import Category from '../Categories/Category';

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
					<header className="modal-card-head">
						<p className="modal-card-title">Novo Post</p>
						<button className="delete" aria-label="close" onClick={ this.closeModalPost }></button>
					</header>
					<section className="modal-card-body">
						<form onSubmit={ this.addPost } >
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

							<Category todas={ false } />

							<div className="field">
								<label className="label">Mensagem</label>
								<div className="control">
									<textarea name="body" className="textarea" placeholder="Mensagem"></textarea>
								</div>
							</div>

							{/* <div className="field is-grouped">
								<div className="control">
									<button className="button is-link">Submit</button>
								</div>
								<div className="control">
									<button className="button is-text">Cancel</button>
								</div>
							</div> */}
						</form>
					</section>
					<footer className="modal-card-foot">
						<button id="criaPost" className="button is-success" >Criar</button>
						{/* <button className="button is-red" onClick={ this.closeModalPost }>Cancelar</button> */}
					</footer>
				</div>
			</div>

		)
	}

}

export default connect( )(FormPost);