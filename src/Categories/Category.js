import React from 'react';
import ListPosts from '../Posts/ListPosts';
import CategoryList from './CategoryList';
import Order from '../Order/Order';

function Category( props ) {
	return (
		<div>
			<div className="notification">
				<CategoryList className="is-left" todas={ true } />
				<Order className="is-right" />
			</div>
			<ListPosts />
		</div>
	);
}

export default Category;