export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';

export const changeSelectedCategory = ( category ) => (
	{
		type: CHANGE_CATEGORY,
		category
	}
)