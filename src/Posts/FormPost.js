import React from 'react';
import 'bulma/css/bulma.css';
import 'mdi/css/materialdesignicons.css'

function FormPost( props ) {
	
	return (
		<div>
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

			<div className="field is-grouped">
				<div className="control">
					<button className="button is-link">Submit</button>
				</div>
				<div className="control">
					<button className="button is-text">Cancel</button>
				</div>
			</div>
		</div>
	
	)

}

export default FormPost;