import { SET_QUESTION_STATUS } from '../actions/actionsTypes';

const initialState = {
  isAnswered: false
}

const data = (state = initialState, action) => {
  switch (action.type) {

  case SET_QUESTION_STATUS:
    return { 
      ...state, 
      isAnswered: action.status
    }

  default:
    return state
  }
}

export default data;