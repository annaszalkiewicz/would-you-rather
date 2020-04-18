import { combineReducers } from 'redux';

import auth from './auth';
import users from './users';
import questions from './questions';
import data from './data';

const rootReducer = combineReducers({
  auth: auth,
  users: users,
  questions: questions,
  data: data
})

export default rootReducer;