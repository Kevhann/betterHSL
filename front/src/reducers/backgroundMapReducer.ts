import { createAction, createReducer } from '@reduxjs/toolkit';

type BackgroundMapState = [[number, number], [number, number]];

export const setBackgroundLocation = createAction<BackgroundMapState>(
  'SET_BACKGROUND_MAP_LOCATION'
);

const initialState: BackgroundMapState = [
  [60.1673319317496, 24.80082397460938],
  [60.158966553797576, 25.063716125488285]
];

export const backgroundMapReducer = createReducer(initialState, builder => {
  builder.addCase(setBackgroundLocation, (state, action) => {
    state = action.payload;
  });
});
