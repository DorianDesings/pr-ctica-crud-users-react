import { USER_STATUS_ACTIONS } from '../actions/user-status.actions';

export const USER_LIST_INITIAL_STATE = {
	mode: USER_STATUS_ACTIONS.CREATE,
	currentUser: null
};

export const userListReducer = (state, { type, payload }) => {
	switch (type) {
		case USER_STATUS_ACTIONS.CREATE:
			return {
				mode: USER_STATUS_ACTIONS.CREATE,
				currentUser: null
			};
		case USER_STATUS_ACTIONS.DETAILS:
			return {
				mode: USER_STATUS_ACTIONS.DETAILS,
				currentUser: payload.user
			};
		case USER_STATUS_ACTIONS.EDIT:
			return {
				mode: USER_STATUS_ACTIONS.EDIT,
				currentUser: payload.user
			};
		case USER_STATUS_ACTIONS.DELETE:
			return {
				mode: USER_STATUS_ACTIONS.DELETE,
				currentUser: payload.user
			};

		default:
			throw new Error('INVALID ACTION');
	}
};
