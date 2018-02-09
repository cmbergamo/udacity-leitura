import React, { Component } from 'react';
import ControlPainel from '../utils/ControlPainel';

import * as ServerAPI from '../api/ServerAPI';

class Comments extends Component {

	state = {
		comments: []
	}

	componentDidMount () {
		ServerAPI.getCommentsFromPost( this.props.post ).then( resp => {
				this.setState( { comments: resp } );
			}
		);
	}

	voteComment = ( _id, _valor ) => {
		ServerAPI.voteComment( _id, _valor ).then( _post => console.log( _post ) );
	}

	deleteComment = ( _id ) => {
		ServerAPI.deleteComment( _id ).then( _post => {
			this.props.deleteComment( _post.id );
		} );
	}

	render () {
		return this.state.comments.length > 0 && this.state.comments.map( comment => (
				<div class="columns">
					<div key={ comment.id } className="column has-text-justified">
						<span> { comment.body } </span>
						<ControlPainel functions={ 
								{ 
									thumbUp: () => this.voteComment( comment.id, 1 ),
									thumbDown: () => this.voteComment( comment.id, -1 ),
									del: () => this.deleteComment( comment.id )
								}
							} />
					</div>
				</div>
			) ) ;
	}
	
}

export default Comments;