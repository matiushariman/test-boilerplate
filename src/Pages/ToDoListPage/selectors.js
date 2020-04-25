import { createSelector } from '@reduxjs/toolkit';

const makeSelectToDoList = (state) => state.toDoList;

export const toDoListSelector = createSelector(makeSelectToDoList, (state) => state);
