/* eslint-disable prettier/prettier */
import { configureStore, combineSlices } from '@reduxjs/toolkit';

import { postsSlice } from '../features/postsSlice';
import { usersSlice } from '../features/usersSlice';
import { commentsSlice } from '../features/commentsSlice';

const rootReducer = combineSlices(
  postsSlice, usersSlice, commentsSlice
);

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
