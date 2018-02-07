import React, { Component } from 'react';

class FormComment extends Component {

	createComment = ( ) => {
		
	}

	render() {
		return (
			<div id="form-post" >
				<section className="modal-card-body">
					<form>

						<div className="field">
							<label className="label">Autor</label>
							<div className="control has-icons-left">
								<input name="author" className="input" type="text" placeholder="Nome do autor" />
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
					<button id="criaComment" className="button is-success" onClick={ this.addPost }>Criar</button>
					{/* <button className="button is-red" onClick={ this.closeModalPost }>Cancelar</button> */}
				</footer>
			</div>
		);
	}

}

export default FormComment