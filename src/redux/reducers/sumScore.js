import { SUM_SCORE } from '../actions/sumScore';

const initialState = {
  assertions: 0,
  score: 0,
};

const player = (state = initialState, action) => {
  switch (action.type) {
  case SUM_SCORE:
    return ({
      ...state,
      assertions: action.assertions,
      score: action.score,
    });
  default:
    return state;
  }
};

export default player;
