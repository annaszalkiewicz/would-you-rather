import { GET_QUESTIONS,  ADD_QUESTION } from './actionsTypes';
import { addQuestionToUser } from './users.js';
import { fetchAllData } from './data';
import { _saveQuestion, _saveQuestionAnswer } from '../../data/_DATA.js';

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

export const saveAnswer = ({authedUser, qid, answer}) => {
  return dispatch => {
    return _saveQuestionAnswer({authedUser, qid, answer}).then(() => dispatch(fetchAllData())   
    )
  }
}