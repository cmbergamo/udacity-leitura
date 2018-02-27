import React, { Component } from 'react';
import ControlPainel from '../utils/ControlPainel';

import { connect } from 'react-redux';

import ServerAPI from '../api/ServerAPI';
import sortBy from 'sort-by';
import { initComments, addComment, delComment, voteComment } from './actions';

class Comments extends Component {

	componentDidMount () {
		this.props.init( this.props.post );
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
									del: () => this.deleteComment( comment )
								}
							} />
				</div>
			</article>
			) ) ;
	}
	
}

function mapStateToProps( currentState, props ) {
	
	let { comments = [], order = 'voteScore' } = currentState;

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