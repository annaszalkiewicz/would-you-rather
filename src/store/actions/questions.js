import { GET_QUESTIONS } from './actionsTypes';

export const getQuestions = questions => {
  return {
    type: GET_QUESTIONS,
    questions
  }
}