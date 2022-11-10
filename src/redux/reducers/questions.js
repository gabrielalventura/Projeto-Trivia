import { GET_QUESTIONS } from '../actions/questions';

const initialState = {};

const catchQuestions = (state = initialState, action) => {
  switch (action.type) {
  case GET_QUESTIONS:
    return ({
      questions: action.payload,
    });
  default:
    return state;
  }
};

export default catchQuestions;
