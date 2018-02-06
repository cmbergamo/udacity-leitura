import React, { Component } from 'react';
import Comments from '../Comments/Comments';
import { connect } from 'react-redux';
import { editPost } from './actions';
import * as ServerAPI from '../api/ServerAPI'

import 'bulma/css/bulma.css';
import 'mdi/css/materialdesignicons.css'

class Post extends Component{

	vote = ( _id, _valor ) => {
		ServerAPI.votePost( _id, _valor ).then( _post => console.log( _post ) );
	}

	edit = ( _id, _title, _body ) => {
		ServerAPI.editPost( { id: _id, title: _title, body: _body } ).then( _post => console.log( _post ) );
	}

	showComments = ( _element ) => {
		
		const classe = _element.getAttribute( "class" );
		const posicao = classe.indexOf(" is-hidden");

		if ( posicao >= 0 )
			_element.setAttribute( "class", classe.substring( 0, classe.indexOf(" is-hidden") ) );
		else
			_element.setAttribute( "class", classe + " is-hidden" );
	}

	render() {
		const { post } = this.props;

		return (
			<div className="tile is-ancestor">
				<article className="tile is-child box notification ">
					<p className='title'>{ post.title }</p>
					<p className='subtitle'>
						<span className="icon">
							<i className="mdi mdi-account"></i>
						</span>
						{ post.author }
					</p>

					<div className='content' >
						<p>{ post.body }</p>
					</div>

					<nav className="navbar is-light">
						<div className="navbar-start">
							<div className="navbar-item">
								<div className="field is-grouped">
									<p className="control">
										<button className="bd-tw-button button" onClick={ () => this.showComments( document.getElementById( `${ post.id }-comments` ) ) } >
											<span className="icon">
												<i className="mdi mdi-message-text"></i>
											</span>
										</button>
									</p>
								</div>
							</div>
						</div>
						<div className="navbar-end">
							<div className="navbar-item">
								<div className="field is-grouped">
									<p className="control">
										<button className="bd-tw-button button" onClick={ () => this.vote( post.id, 1 ) } >
											<span className="icon">
												<i className="mdi mdi-thumb-up"></i>
											</span>
										</button>
									</p>
									<p className="control">
										<button className="button is-danger" onClick={ () => this.vote( post.id, -1 ) } >
											<span className="icon">
												<i className="mdi mdi-thumb-down"></i>
											</span>
										</button>
									</p>
									<p className="control">
										<button className="button" >
											<span className="icon">
												<i className="mdi mdi-delete"></i>
											</span>
										</button>
									</p>
								</div>
							</div>
						</div>

					</nav>
					<div className="level is-hidden" id={ `${ post.id }-comments` } >
						<Comments post={ post.id } />
					</div>
				</article>

			</div>
		);
	}

}

function mapStateToProps( { posts }, currentProps ) {

	const visiblePost = posts.filter( p => p.id === currentProps.id );
	return { post: visiblePost[0] };
}

function mapDispatchToProps( dispatch ) {
	return {
		editPost: (post) => dispatch( editPost( post ) )
	}
}

export default connect( mapStateToProps, mapDispatchToProps )(Post);