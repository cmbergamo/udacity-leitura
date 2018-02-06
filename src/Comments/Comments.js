import React, { Component } from 'react';

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
				<div key={ comment.id } className="level-item has-text-justified">
					<span> { comment.body } </span>
					<button className="button" /* onClick={ () => this.carregaComentario( "8xf0y6ziyjabvozdd253nd" ) } */ > teste</button>
				</div>
			) ) ;
	}
	
}

export default Comments;