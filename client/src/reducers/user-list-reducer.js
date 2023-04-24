export const USER_LIST_INITIAL_STATE = {
	mode: 'CREATE',
	currentUser: null
};

export const userListReducer = (state, { type, payload }) => {
	switch (type) {
		case 'CREATE':
			return {
				mode: 'CREATE',
				currentUser: null
			};
		case 'DETAILS':
			return {
				mode: 'DETAILS',
				currentUser: payload.user
			};
		case 'EDIT':
			return {
				mode: 'EDIT',
				currentUser: payload.user
			};
		case 'DELETE':
			return {
				mode: 'DELETE',
				currentUser: payload.user
			};

		default:
			throw new Error('INVALID ACTION');
	}
};
