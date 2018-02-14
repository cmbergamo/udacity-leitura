import React, { Component } from 'react';
import ControlPainel from '../utils/ControlPainel';

import { connect } from 'react-redux';

import * as ServerAPI from '../api/ServerAPI';
import { initComments, addComment } from './actions';

class Comments extends Component {

	componentDidMount () {
		ServerAPI.getCommentsFromPost( this.props.post ).then( resp => {
				this.props.init( resp );
				//this.setState( { comments: resp } );
			}
		);
	}

	voteComment = ( _id, _valor ) => {
		ServerAPI.voteComment( _id, _valor ).then( _post => console.log( _post ) );
	}

	deleteComment = ( _id ) => {
		ServerAPI.deleteComment( _id ).then( _post => {
			this.setState( { comments: this.props.comments.filter( comment => comment.id !== _id ) } );
			//this.props.deleteComment( _post.id );
		} );
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
					<ControlPainel functions={ 
								{ 
									thumbUp: () => this.voteComment( comment.id, 1 ),
									thumbDown: () => this.voteComment( comment.id, -1 ),
									del: () => this.deleteComment( comment.id )
								}
							} />
				</div>
			</article>
			) ) ;
	}
	
}

function mapStateToProps( currentState, props ) {
	
	let { comments = [] } = currentState;
	
	return { comments: ( comments[props.post] || [] ) }
}

function mapDispatchToProps ( dispatch ) {
	return {
		init: ( comments ) => dispatch( initComments( comments ) ),
		addComment: ( comment ) => dispatch( addComment( comment ) )
	}
}

export default connect( mapStateToProps, mapDispatchToProps )( Comments );