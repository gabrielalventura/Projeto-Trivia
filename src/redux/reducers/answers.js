import { RANDOM_ARRAY } from '../actions/questions';

const initialState = {};

const answers = (state = initialState, action) => {
  switch (action.type) {
  case RANDOM_ARRAY:
    return ({
      answer: action.payload,
    });
  default:
    return state;
  }
};

export default answers;
