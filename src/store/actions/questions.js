import { GET_QUESTIONS,  ADD_QUESTION } from './actionsTypes';
import { addQuestionToUser } from './users.js';
import { _saveQuestion } from '../../data/_DATA.js';

export const getQuestions = questions => {
  return {
    type: GET_QUESTIONS,
    questions
  }
}

export const addQuestion = question => {
  return {
    type: ADD_QUESTION,
    question
  }
}

export const saveNewQuestion = (question) => {
  return dispatch => {
    return _saveQuestion(question).then(question => {
      dispatch(addQuestion(question));
      dispatch(addQuestionToUser(question));
    })
  }
}