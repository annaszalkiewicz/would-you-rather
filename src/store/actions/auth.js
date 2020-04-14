import {
	SET_AUTH_USER,
	LOG_OUT_USER,
	GET_ANSWERED_QUESTIONS,
	GET_UNANSWERED_QUESTIONS,
} from './actionsTypes';

export const setAuthUser = (id) => {
	return {
		type: SET_AUTH_USER,
		id,
	};
};

export const logoutUser = () => {
	return {
		type: LOG_OUT_USER,
	};
};

export const getAnsweredQuestions = (questions) => {
	return {
		type: GET_ANSWERED_QUESTIONS,
		questions,
	};
};

export const getUnansweredQuestions = (questions) => {
	return {
		type: GET_UNANSWERED_QUESTIONS,
		questions,
	};
};
