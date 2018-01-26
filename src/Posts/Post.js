import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import 'mdi/css/materialdesignicons.css'

class Post extends Component{

	render() {
		const { post } = this.props;

		return (
			<div className="tile is-ancestor">
				<article className="tile is-child box notification ">
					<p className='title'>{ post.title }</p>
					<p className='subtitle'>
						<span className="icon">
							<i className="mdi mdi-account"></i>
						</span>
						{ post.author }
					</p>

					<div className='content' >
						<p>{ post.body }</p>
					</div>

					<nav class="navbar is-light">
					<div class="navbar-end">
						<div class="navbar-item">
							<div class="field is-grouped">
								<p class="control">
									<a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
										<span class="icon">
											<i class="mdi mdi-thumb-up"></i>
										</span>
									</a>
								</p>
								<p class="control">
									<a class="button is-danger" href="https://github.com/jgthms/bulma/archive/0.5.1.zip">
										<span class="icon">
											<i class="mdi mdi-thumb-down"></i>
										</span>
									</a>
								</p>
								<p class="control">
									<a class="button" href="https://github.com/jgthms/bulma/archive/0.5.1.zip">
										<span class="icon">
											<i class="mdi mdi-delete"></i>
										</span>
									</a>
								</p>
							</div>
						</div>
					</div>

					</nav>
				</article>

			</div>
		);
	}

}



export default Post;