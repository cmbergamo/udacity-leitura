import React from 'react';

function Infos( props ) {

	const { component } = props;

	let show = false;

	if ( component.commentCount )
		show = true;

	return (
		<footer className="footer is-bordered" style={ { padding: 0 } }>
			<div className="container">
				<div className="content">
					<div className="columns" style={ { marginLeft: 0, marginRight: 0 } } >
						<div className="column is-narrow">
							<b>Criado em: </b>{ new Date( component.timestamp ).toDateString() }
						</div>
						<div className="column is-narrow">
							<b>Score: </b>{ component.voteScore }
						</div>
						{ show  && (
							<div className="column">
								<b>Num. Comentários: </b>{ component.commentCount }
							</div>
						) }
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Infos;