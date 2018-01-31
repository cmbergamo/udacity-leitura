import React, { Component } from 'react';

import * as ServerAPI from '../api/ServerAPI';

class Comments extends Component {

	carregaComentario = () => {
		ServerAPI.getComentarios("8xf0y6ziyjabvozdd253nd").then( resp => console.log( resp ) );
	}

	render () {
		return ( <button className="button" onClick={ this.carregaComentario } > teste</button> );
	}
	
}

export default Comments;