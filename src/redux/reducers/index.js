import { combineReducers } from 'redux';
import userLogin from './userLogin';
import catchQuestions from './questions';
import player from './sumScore';
import answers from './answers';

const rootReducer = combineReducers({
  userLogin,
  catchQuestions,
  player,
  answers,
});

export default rootReducer;
