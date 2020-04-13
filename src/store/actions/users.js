import { GET_USERS } from './actionsTypes';

export const getUsers = (users) => {
	return {
		type: GET_USERS,
		users,
	};
};

