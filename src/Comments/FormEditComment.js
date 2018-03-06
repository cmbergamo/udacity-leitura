import React, { Component } from 'react';

import { connect } from 'react-redux';
import { editComment } from './actions';

import * as ServerAPI from '../api/ServerAPI';

class FormEditComment extends Component {

	closeModalComment = () => {
		document.getElementById("modal-comment").classList.remove( "is-active" );
	}

	editComment = ( _event ) => {
		_event.preventDefault();
		document.getElementById("editComment").classList.add("is-loading");

		const form = _event.target;

		let obj = { };

		for ( let data of form ){
			if ( data.name )
				obj[ data.name ] =  data.value ;
		}

		obj.timestamp = new Date().getTime();

		ServerAPI.editComment( obj ).then( resp => {
			
			this.props.dispatch( editComment( resp ) );
			document.getElementById("editComment").classList.remove("is-loading");
		} );

	}

	render() {
		return (
			<div className="modal" id="modal-comment" >
				<div className="modal-background" onClick={ this.closeModalComment } ></div>
				<div className="modal-card">
					<form onSubmit={ this.editComment } >
						<header className="modal-card-head">
							<p className="modal-card-title">Edit Comment</p>
							<button type="button" className="delete" aria-label="close" onClick={ this.closeModalComment } ></button>
						</header>
						<section className="modal-card-body">
					
							<div className="field">
								<label className="label">Mensagem</label>
								<div className="control">
									<textarea name="body" className="textarea" placeholder="Mensagem"></textarea>
								</div>
							</div>

							<input type="hidden" name="id" value={ this.props.parentId } />

						</section>
						<footer className="modal-card-foot">
							<button type="submit" id="editComment" className="button is-success" >Editar</button>
						</footer>
					</form>
				</div>
			</div>
		);
	}

}

export default connect( )( FormEditComment );