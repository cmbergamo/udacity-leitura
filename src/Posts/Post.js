import React, { Component } from 'react';
import Comments from '../Comments/Comments';
import FormComment from '../Comments/FormComment';
import ControlPainel from '../utils/ControlPainel';
import FormEditComment from '../Comments/FormEditComment';
import { Link, withRouter } from 'react-router-dom';
import Infos from '../Components/Infos';

import { connect } from 'react-redux';
import { editPost, deletePost } from './actions';

import * as ServerAPI from '../api/ServerAPI'

import 'bulma/css/bulma.css';
import 'mdi/css/materialdesignicons.css'

class Post extends Component{

	vote = ( _id, _valor ) => {
		ServerAPI.votePost( _id, _valor ).then( _post => console.log( _post ) );
	}

	edit = ( ) => {
		const modal = document.getElementById("modal-editPost");
		modal.classList.add("is-active");

		const form = modal.querySelector( "form" );

		for( const data of form ) {

			switch( data.name ) {
				case "title" :
					data.value = this.props.post.title;

					break;
				
				case "body" :
					data.value = this.props.post.body;

					break;
				
				case "id" :
					data.value = this.props.post.id;
					
					break;
			}

		}

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
					<Link to={ `/${ post.category }/${ post.id }` } ><p className='title'>{ post.title }</p></Link>
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
						( <Infos component={ post } />
					) } 

					<ControlPainel functions={ 
							{ 
								message: () => this.showHidde( document.getElementById( `${ post.id }-comments` ) ),
								messagePlus: () => this.showHidde( document.getElementById( `${ post.id }-comment` ) ),
								thumbUp: () => this.vote( post.id, 1 ),
								thumbDown: () => this.vote( post.id, -1 ),
								del: () => this.delete( post.id ),
								edit: () => this.edit()
							}
						} />
					
					<section className="section is-hidden" id={ `${ post.id }-comments` } >
						<Comments post={ post.id } />
					</section>
					<section className="is-hidden" id={ `${ post.id }-comment` } >
						<FormComment parentId={ post.id} />	
					</section>

					<FormEditComment />
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