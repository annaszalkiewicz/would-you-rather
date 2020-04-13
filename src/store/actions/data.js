import { getUsers } from './users';
import { getQuestions } from './questions';

import { _getUsers, _getQuestions } from '../../data/_DATA';

export const fetchAllData = () => {
  return dispatch => {
    // return Promise.all([_getUsers, _getQuestions])
    // .then(({users, questions}) => {
    //   dispatch(getUsers(users))
    //   dispatch(getQuestions(questions))
    // })
    _getUsers().then(users => dispatch(getUsers(users)));
    _getQuestions().then(questions => dispatch(getQuestions(questions)));
  }
}