import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import 'mdi/css/materialdesignicons.css'

class FormPost extends Component {

	closeModalPost() {
		const modal = document.getElementById("modal-post");

		let classes = modal.getAttribute("class").indexOf( " is-active" );

		modal.setAttribute( "class", modal.getAttribute("class").substring( 0, classes ) );
	}
	
	render ( ) {
		return (
			<div className="modal" id="modal-post" >
				<div className="modal-background"></div>
				<div className="modal-card">
					<header className="modal-card-head">
						<p className="modal-card-title">Modal title</p>
						<button className="delete" aria-label="close" onClick={ this.closeModalPost }></button>
					</header>
					<section className="modal-card-body">
						<div className="field">
							<label className="label">Título</label>
							<div className="control">
								<input className="input" type="text" placeholder="Título" />
							</div>
						</div>

						<div className="field">
							<label className="label">Autor</label>
							<div className="control has-icons-left">
								<input className="input" type="text" placeholder="Nome do autor" />
								<span className="icon is-small is-left">
									<i className="mdi mdi-account"></i>
								</span>
							</div>
						</div>

						<div className="field">
							<label className="label">Mensagem</label>
							<div className="control">
								<textarea className="textarea" placeholder="Mensagem"></textarea>
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
					</section>
					<footer className="modal-card-foot">
						<button className="button is-success">Criar</button>
						<button className="button">Cancelar</button>
					</footer>
				</div>
			</div>

		)
	}

}

export default FormPost;