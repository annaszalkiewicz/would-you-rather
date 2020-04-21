import { GET_USERS, ADD_QUESTION_TO_USER } from './actionsTypes';

export const getUsers = (users) => {
	return {
		type: GET_USERS,
		users,
	};
};

export const addQuestionToUser = ({ id, author }) => {
	return {
		type: ADD_QUESTION_TO_USER,
		id,
		author,
	};
};
