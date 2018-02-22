import React from 'react';
import ListPosts from '../Posts/ListPosts';
import CategoryList from './CategoryList';
import Order from '../Order/Order';

import { connect } from 'react-redux';

function Category( props ) {
	console.log( props );
	return (
		<section className="section is-paddingless">
			<div className="notification">
				<CategoryList className="is-flex  is-left" todas={ true } />
				<Order className="is-flex is-right" />
			</div>
			<ListPosts />
		</section>
	);
}

export default connect()(Category);