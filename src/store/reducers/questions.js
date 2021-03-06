import { GET_QUESTIONS, ADD_QUESTION } from '../actions/actionsTypes';

const users = (state = {}, action) => {
	switch (action.type) {
		case GET_QUESTIONS:
			return {
				...state,
				...action.questions,
			};

		case ADD_QUESTION:
			return {
				...state,
				[action.question.id]: action.question,
			};

		default:
			return state;
	}
};

export default users;
