import { createReducer } from '@reduxjs/toolkit';

export const toDoListReducer = createReducer([], {
  ADD_TODO: (state, action) => {
    state.push(action.text);
  },
});

export default toDoListReducer;
