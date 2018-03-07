import React, { Component } from 'react';
import ControlPainel from '../utils/ControlPainel';
import Infos from '../Components/Infos';

import { connect } from 'react-redux';

import * as ServerAPI from '../api/ServerAPI';
import sortBy from 'sort-by';
import { initComments, addComment, delComment, voteComment } from './actions';

class Comments extends Component {

	componentDidMount () {
		ServerAPI.getCommentsFromPost( this.props.post ).then( resp => {
				this.props.init( resp );
			}
		);
	}

	voteComment = ( _id, _valor ) => {
		ServerAPI.voteComment( _id, _valor ).then( _c => {
			this.props.voteComment( _c );
		 } );
	}

	deleteComment = ( _comment ) => {
		ServerAPI.deleteComment( _comment.id ).then( _c => {
			this.props.delComment( _comment );
		} );
	}

	edit = ( _comment ) => {
		const modal = document.getElementById("modal-comment");
		modal.classList.add("is-active");

		const form = modal.querySelector( "form" );

		for( const data of form ) {
			
			switch( data.name ) {
				
				case "body" :
					data.value = _comment.body;

					break;
				
				case "id" :
					data.value = _comment.id;
					
					break;
			}

		}
	}

	render () {

		return this.props.comments.length > 0 && this.props.comments.map( comment => (
			<article className="media" key={ comment.id }>
				<div className="media-content">
					<div className="content">
						<p>
							<strong>
								<span className="icon">
									<i className="mdi mdi-account"></i>
								</span>
								{ comment.author }
							</strong>
							<br />
							<span> { comment.body } </span>
						</p>
					</div>
					<Infos component={ comment } />
					<ControlPainel functions={ 
								{ 
									thumbUp: () => this.voteComment( comment.id, 1 ),
									thumbDown: () => this.voteComment( comment.id, -1 ),
									del: () => this.deleteComment( comment ),
									edit: () => this.edit( comment )
								}
							} />
				</div>
			</article>
			) ) ;
	}
	
}

function mapStateToProps( currentState, props ) {
	
	let { comments = [], order = '-voteScore' } = currentState;

	comments = comments[props.post] || [];
	comments = comments.slice( 0 )

	comments.sort( sortBy( order ) ); 

	return { comments }
}

function mapDispatchToProps ( dispatch ) {
	return {
		init: ( comments ) => dispatch( initComments( comments ) ),
		addComment: ( comment ) => dispatch( addComment( comment ) ),
		delComment: ( comment ) => dispatch( delComment ( comment ) ),
		voteComment: ( comment ) => dispatch( voteComment( comment ) )
	}
}

export default connect( mapStateToProps, mapDispatchToProps )( Comments );