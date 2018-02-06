export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';

export const changeSelectedCategory = ( category ) => {
	
	return {
		type: CHANGE_CATEGORY,
		category
	}
	
}