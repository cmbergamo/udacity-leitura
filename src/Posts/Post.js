import React, { Component } from 'react';
import Comments from '../Comments/Comments';
import FormComment from '../Comments/FormComment';
import ControlPainel from '../utils/ControlPainel';
import { Link, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { editPost, deletePost } from './actions';

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

	delete = ( _id ) => {
		ServerAPI.deletePost( _id ).then( _post => {
			this.props.deletePost( _post.id );
		} );
	}

	showHidde = ( _element ) => {

		if ( _element.classList.contains( "is-hidden" ) )
			_element.classList.remove( "is-hidden" )
		else
			_element.classList.add( "is-hidden" )

	}

	render() {
		const { post } = this.props;
		
		let details = false;
		if ( this.props.match && this.props.match.params.id ) {
			details = true;
		}

		return (
			<div className="tile is-ancestor">
				<article className="tile is-child box notification ">
					<p className='title'><Link to={ `/${ post.category }/${ post.id }` } >{ post.title }</Link></p>
					<p className='subtitle'>
						<span className="icon">
							<i className="mdi mdi-account"></i>
						</span>
						{ post.author }
					</p>

					<div className='content' >
						<p>{ post.body }</p>
					</div>

					{ details &&  

						( <footer className="footer is-bordered" style={ { padding: 0 } }>
					
						<div className="container">
							<div className="content">
								<div className="columns" >
									<div className="column">
										<b>Criado em: </b>{ new Date( post.timestamp ).toDateString() }
									</div>
									<div className="column">
										<b>Score: </b>{ post.voteScore }
									</div>
									<div className="column">
										<b>Num. Comentários: </b>{ post.commentCount }
									</div>
								</div>
							</div>
						</div>
					</footer>
					) } 

					<ControlPainel functions={ 
							{ 
								message: () => this.showHidde( document.getElementById( `${ post.id }-comments` ) ),
								messagePlus: () => this.showHidde( document.getElementById( `${ post.id }-comment` ) ),
								thumbUp: () => this.vote( post.id, 1 ),
								thumbDown: () => this.vote( post.id, -1 ),
								del: () => this.delete( post.id ),
								edit: true
							}
						} />
					
					<section className="section is-hidden" id={ `${ post.id }-comments` } >
						<Comments post={ post.id } />
					</section>
					<section className="is-hidden" id={ `${ post.id }-comment` } >
						<FormComment parentId={ post.id} />	
					</section>
				</article>

			</div>
		);
	}

}

function mapStateToProps( { posts }, currentProps ) {
	let id = currentProps.id 
	
	if ( ! id )
		id = currentProps.match.params.id ;

	const visiblePost = posts.filter( p => p.id === id );

	return { post: visiblePost[0] };
}

function mapDispatchToProps( dispatch ) {
	return {
		editPost: (post) => dispatch( editPost( post ) ),
		deletePost: (post) => dispatch( deletePost( post ) )
	}
}

export default withRouter( connect( mapStateToProps, mapDispatchToProps )(Post) );