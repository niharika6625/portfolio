import { combineReducers } from '@reduxjs/toolkit';
import numberGame from './numberGame';
import weather from './weather';

const rootReducer = combineReducers({
  numberGame,
  weather
});

export default rootReducer;