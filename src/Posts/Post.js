import React from 'react';
import 'bulma/css/bulma.css';

function Post( props ) {

	return (
		<div className="tile is-ancestor">
			<article className="tile is-child box notification is-primary">
				<p className='title'>Teste</p>
				<p className='subtitle'>Autores</p>

				<div className='content' >
					<p>texto descritivo de post</p>
				</div>
			</article>

		</div>
	);

}

export default Post;