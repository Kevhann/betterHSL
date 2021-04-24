import { createAction, createReducer } from '@reduxjs/toolkit';

type MapClassState = 'startMap' | 'resultsMap';

export const setMapClass = createAction<MapClassState>('SET_MAP_CLASS');

const initialState = 'startMap';

export const mapClassReducer = createReducer<MapClassState>(initialState, builder => {
  builder.addCase(setMapClass, (state, action) => action.payload);
});
