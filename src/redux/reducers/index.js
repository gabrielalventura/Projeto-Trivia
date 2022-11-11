import { combineReducers } from 'redux';
import userLogin from './userLogin';
import catchQuestions from './questions';

const rootReducer = combineReducers({
  userLogin,
  catchQuestions,
});

export default rootReducer;
