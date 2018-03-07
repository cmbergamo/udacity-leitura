import React, { Component } from 'react';
import Comments from '../Comments/Comments';
import FormComment from '../Comments/FormComment';
import ControlPainel from '../utils/ControlPainel';
import { Link, withRouter } from 'react-router-dom';
import Infos from '../Components/Infos';

import { connect } from 'react-redux';
import { editPost, deletePost, votePost } from './actions';

import 'bulma/css/bulma.css';
import 'mdi/css/materialdesignicons.css'
import { ServerApi } from '../api/ServerAPI';

class Post extends Component{

	state = {
		post: {}
	}

	vote = ( _id, _valor ) => {
		this.props.votePost( _id, _valor );
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
		this.props.deletePost( _id );
	}

	showHidde = ( _element ) => {

		if ( _element.classList.contains( "is-hidden" ) )
			_element.classList.remove( "is-hidden" )
		else
			_element.classList.add( "is-hidden" )

	}

	componentWillMount () {
		if ( !this.props.post ) {
			ServerApi.getPostDetails( this.props.match.params.id ).then( p => {
				this.setState( { post: p } );
			} );
		} else {
			this.setState( { post: this.props.post } );
		}
	}

	render() {
		const { post } = this.state;
		const id = post.id || this.props.match.params.id;
		
		let details = false;
		if ( this.props.match && this.props.match.params.id ) {
			details = true;
		}

		return (
			<div className="tile is-ancestor">
				<article className="tile is-child box notification ">
					<Link to={ `/${ post.category }/${ id }` } ><p className='title'>{ post.title }</p></Link>
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
								message: () => this.showHidde( document.getElementById( `${ id }-comments` ) ),
								messagePlus: () => this.showHidde( document.getElementById( `${ id }-comment` ) ),
								thumbUp: () => this.vote( id, 1 ),
								thumbDown: () => this.vote( id, -1 ),
								del: () => this.delete( id ),
								edit: () => this.edit()
							}
						} />
					
					<section className="section is-hidden" id={ `${ id }-comments` } >
						<Comments post={ id } />
					</section>
					<section className="is-hidden" id={ `${ id }-comment` } >
						<FormComment parentId={ id} />	
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
		deletePost: (post) => dispatch( deletePost( post ) ),
		votePost: (post, vote) => dispatch( votePost( post, vote ) )
	}
}

export default withRouter( connect( mapStateToProps, mapDispatchToProps )(Post) );