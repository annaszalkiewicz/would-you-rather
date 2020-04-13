import { GET_QUESTIONS } from '../actions/actionsTypes';

const users = (state = {}, action) => {
	switch (action.type) {
		case GET_QUESTIONS:
			return { 
        ...state, 
        ...action.questions 
      };

		default:
			return state;
	}
};

export default users;
