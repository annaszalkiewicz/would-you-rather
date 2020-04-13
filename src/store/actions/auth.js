import { SET_AUTH_USER } from './actionsTypes';

export const setAuthUser = id => {
	return {
		type: SET_AUTH_USER,
		id
	}
}