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

	render () {
		return this.state.comments.length > 0 && this.state.comments.map( comment => (
				<div class="columns">
					<div key={ comment.id } className="column has-text-justified">
						<span> { comment.body } </span>
						<ControlPainel functions={ 
								{ 
									thumbUp: () => this.vote( comment.id, 1 ),
									thumbDown: () => this.vote( comment.id, -1 ),
									del: () => this.delete( comment.id )
								}
							} />
					</div>
				</div>
			) ) ;
	}
	
}

export default Comments;