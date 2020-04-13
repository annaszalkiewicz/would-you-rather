import { combineReducers } from 'redux';

import auth from './auth';
import users from './users';
import questions from './questions';

const rootReducer = combineReducers({
  auth: auth,
  users: users,
  questions: questions
})

export default rootReducer;