// reducers.js
import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import todoListReducer from './Pages/ToDoListPage/reducer';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    toDoList: todoListReducer,
  });

export default createRootReducer;
