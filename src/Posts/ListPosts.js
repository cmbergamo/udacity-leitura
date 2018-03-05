import React, { Component } from 'react';
import Post from './Post';
import FormPost from './FormPost';

import { connect } from 'react-redux';

import sortBy from 'sort-by';

class ListPosts extends Component {

	showModalPost() {
		document.getElementById("modal-post").classList.add( "is-active" );
	}

	render() {

		return (
			<section className="section is-paddingless">
				<div  className="media">
					<div className="media-left" />
					<div className="media-content" style={ { overflow: "visible"} } >
						{ this.props.posts && this.props.posts.map( post => ( <Post id={ post.id }  key={ post.id } /> ) ) }
					</div>

					<div className="media-right">
						<button className="button is-medium modal-button" data-target="modal-post" onClick={this.showModalPost} >
							<span className="icon is-small">
								<i className='mdi mdi-plus-circle'></i>
							</span>
						</button>
					</div>
				</div>
				<FormPost />
			</section>
		);
	}
}

function mapStateToProps( currentState, props ) {
	let { posts = [] , category = '', order = '-voteScore' } = currentState;

	if ( category === undefined || category === '' ) {
		posts = posts.slice( 0 );
		posts.sort( sortBy( order ) );

		return  { posts, category } ;

	} else {

		let visiblePosts = posts.filter( ( p ) => {
			return p.category === category
		});
		
		visiblePosts.sort( sortBy( order ) );

		return  { posts: visiblePosts ,
			category } ;
	}
}

export default connect( mapStateToProps )(ListPosts);