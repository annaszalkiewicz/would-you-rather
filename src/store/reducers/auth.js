import { SET_AUTH_USER } from '../actions/actionsTypes';

const auth = (state = {}, action) => {
	switch (action.type) {
		case SET_AUTH_USER:
			return {
				...state,
				authUser: action.id
			}

		default:
			return state;
	}
};

export default auth;
