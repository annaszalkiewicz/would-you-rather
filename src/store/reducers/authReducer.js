import { IS_LOGIN } from '../actions/actionsTypes';

const initialState = {
	isLogin: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case IS_LOGIN:
			return {
				...state,
				isLogin: true,
			};

		default:
			return state;
	}
};

export default authReducer;
