import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addComment } from './actions';

import * as ServerAPI from '../api/ServerAPI';
import { generateUUID } from '../utils/utils';

class FormComment extends Component {

	createComment = ( _event ) => {
		_event.preventDefault();
		document.getElementById("criaPost").classList.add("is-loading");

		const form = _event.target;

		let obj = { };

		for ( let data of form ){
			if ( data.name )
				obj[ data.name ] =  data.value ;
		}

		obj.timestamp = new Date().getTime();
		obj.id = generateUUID();

		console.log( obj );

		ServerAPI.addComment( obj ).then( resp => {
			console.log( resp );
			
			this.props.dispatch( addComment( resp ) );
			document.getElementById("criaPost").classList.remove("is-loading");
		} );

	}

	render() {
		return (
			<div id="form-post" >
				<form onSubmit={ this.createComment }>
					<section className="modal-card-body">
					

						<div className="field">
							<label className="label">Autor</label>
							<div className="control has-icons-left">
								<input name="author" className="input" type="text" placeholder="Nome do autor" defaultValue="" />
								<span className="icon is-small is-left">
									<i className="mdi mdi-account"></i>
								</span>
							</div>
						</div>

						<div className="field">
							<label className="label">Mensagem</label>
							<div className="control">
								<textarea name="body" className="textarea" placeholder="Mensagem"></textarea>
							</div>
						</div>

						<input type="hidden" name="parentId" value={ this.props.parentId } />

						{/* <div className="field is-grouped">
							<div className="control">
								<button className="button is-link">Submit</button>
							</div>
							<div className="control">
								<button className="button is-text">Cancel</button>
							</div>
						</div> */}
					
					</section>
					<footer className="modal-card-foot">
						<button type="submit" id="criaComment" className="button is-success" >Criar</button>
						{/* <button className="button is-red" onClick={ this.closeModalPost }>Cancelar</button> */}
					</footer>
				</form>
			</div>
		);
	}

}

export default connect( )( FormComment );