import { createReducer, configureStore } from '@reduxjs/toolkit';

const counter = createReducer(0, {});

export const store = configureStore({ reducer: { counter } });

export default configureStore;
