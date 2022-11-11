import { combineReducers } from 'redux';
import userLogin from './userLogin';
import catchQuestions from './questions';
import player from './sumScore';

const rootReducer = combineReducers({
  userLogin,
  catchQuestions,
  player,
});

export default rootReducer;
