import { SET_AUTH_USER, LOG_OUT_USER, GET_ANSWERED_QUESTIONS } from '../actions/actionsTypes';

const auth = (state = {}, action) => {
	switch (action.type) {
		case SET_AUTH_USER:
			return {
				...state,
				authUser: action.id
			}

		case LOG_OUT_USER:
			return {
				...state,
				authUser: {},
				answered: []
			}

		case GET_ANSWERED_QUESTIONS:
			return {
				...state,
				answered: action.questions
			}
		
		default:
			return state;
	}
};

export default auth;
