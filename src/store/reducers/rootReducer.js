import { combineReducers } from 'redux';
import authentication from './authentication/authentication.js';
import numberGame from './numberGame';
import quiz from './quiz/quiz.js';
import todoLists from './todolists/todoLists';

const rootReducer = combineReducers({
  authentication: authentication,
  todoLists: todoLists,
  quiz: quiz,
  numberGame: numberGame,
});

export default rootReducer;
