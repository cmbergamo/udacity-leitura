import React, { Component } from 'react';

import * as ServerAPI from '../api/ServerAPI';

class Comments extends Component {

	render () {
		console.log( "Comments" );
		return ( 
				<div className="level-item has-text-justified" >
					<span> { this.props.comment.body } </span>
					<button className="button" /* onClick={ () => this.carregaComentario( "8xf0y6ziyjabvozdd253nd" ) } */ > teste</button>
				</div>
			);
	}
	
}

export default Comments;