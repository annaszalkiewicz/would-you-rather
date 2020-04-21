import { GET_USERS, ADD_QUESTION_TO_USER } from '../actions/actionsTypes';

const users = (state = {}, action) => {
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				...action.users,
			};

		case ADD_QUESTION_TO_USER:
			return {
				...state,
				[action.author]: {
					...state[action.author],
					questions: [...state[action.author].questions, action.id],
				},
			};

		default:
			return state;
	}
};

export default users;
