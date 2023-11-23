import { combineReducers } from '@reduxjs/toolkit';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
  todos: todoReducer,
  
});

export default rootReducer;
