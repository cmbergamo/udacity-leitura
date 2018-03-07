import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {

	closeModalPost = ( _id ) => {
		document.getElementById( _id ).classList.remove( "is-active" );
	}

	render () {
		return (
			<div className="modal" id={ this.props.objId } >
				<div className="modal-background" onClick={ () => this.closeModalPost( this.props.objId ) } ></div>
				<div className="modal-card">
					<form onSubmit={ this.props.submit } >
						<header className="modal-card-head">
							<p className="modal-card-title">{ this.props.title }</p>
							<button type="button" className="delete" aria-label="close" onClick={ () => this.closeModalPost( this.props.objId ) } ></button>
						</header>
						<section className="modal-card-body">
	
							{ this.props.children }
	
						</section>
						<footer className="modal-card-foot">
							<button type="submit" id="buttonModal" className="button is-success" >{ this.props.objButton }</button>
						</footer>
					</form>
				</div>
			</div>
		);	
	}
	
}

Modal.propTypes = {
	objId: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	objButton: PropTypes.string.isRequired
}

export default Modal;