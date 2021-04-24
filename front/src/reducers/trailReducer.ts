import { createAction, createReducer } from '@reduxjs/toolkit';

export const setActiveTrail = createAction<number>('SET_ACTIVE_TRAIL');

const initialState = 0;

export const trailReducer = createReducer<number>(initialState, builder => {
  builder.addCase(setActiveTrail, (state, action) => {
    state = action.payload;
  });
});
