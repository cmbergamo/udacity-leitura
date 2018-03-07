import React, { Component } from 'react'


class ControlPainel extends Component {


	render() {
		const { message, messagePlus, thumbUp, thumbDown, del, edit } = this.props.functions;

		return (
			<nav className="navbar is-light">
				<div className="navbar-start">
					<div className="navbar-item">
						<div className="field is-grouped">
							{ message && (
								<p className="control">
									<button className="bd-tw-button button" onClick={ message } >
										<span>Mostrar Comentários</span>
										<span className="icon">
											<i className="mdi mdi-message-text"></i>
										</span>
									</button>
								</p>
							)}
							{ messagePlus && (
								<p className="control">
									<button className="bd-tw-button button" onClick={ messagePlus } >
										<span>Adicionar Cometários</span>
										<span className="icon">
											<i className="mdi mdi-message-plus"></i>
										</span>
									</button>
								</p>
							)}
						</div>
					</div>
				</div>
				<div className="navbar-end">
					<div className="navbar-item">
						<div className="field is-grouped">
							{ edit && (
								<p className="control">
									<button className="bd-tw-button button" onClick={ edit } >
										{/* <span>Adicionar Cometários</span> */}
										<span className="icon">
											<i className="mdi mdi-pencil"></i>
										</span>
									</button>
								</p>
							)}
							{ thumbUp && (
								<p className="control">
									<button className="bd-tw-button button" onClick={ thumbUp } >
										<span className="icon">
											<i className="mdi mdi-thumb-up"></i>
										</span>
									</button>
								</p>
							)}
							{ thumbDown && (
								<p className="control">
									<button className="button is-danger" onClick={ thumbDown } >
										<span className="icon">
											<i className="mdi mdi-thumb-down"></i>
										</span>
									</button>
								</p>
							)}
							{ del && (
								<p className="control">
									<button className="button" onClick={ del } >
										<span className="icon">
											<i className="mdi mdi-delete"></i>
										</span>
									</button>
								</p>
							)}
						</div>
					</div>
				</div>

			</nav>
		)
	}

}

export default ControlPainel;