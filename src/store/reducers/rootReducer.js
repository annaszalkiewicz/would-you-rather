import { combineReducers } from 'redux';

import authReducer from './authReducer';
import users from './users';
import questions from './questions';

const rootReducer = combineReducers({
  auth: authReducer,
  users: users,
  questions: questions
})

export default rootReducer;