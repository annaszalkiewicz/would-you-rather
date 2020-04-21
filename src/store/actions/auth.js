import {
	SET_AUTH_USER,
	LOG_OUT_USER
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