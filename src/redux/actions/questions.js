export const GET_QUESTIONS = 'GET_QUESTIONS';
export const RANDOM_ARRAY = 'RANDOM_ARRAY';

export const randomArray = (payload) => ({
  type: RANDOM_ARRAY,
  payload,
});

export const getQuestions = (payload) => ({
  type: GET_QUESTIONS,
  payload,
});
