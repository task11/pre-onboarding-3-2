import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import filterSlice from './filter';

const rootReducer = combineReducers({
  filter: filterSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
