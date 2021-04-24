import { createAction, createReducer } from '@reduxjs/toolkit';
import { Route } from '../types/route';

export const setRoutes = createAction<Route[]>('SET_ROUTES');

const initialState: Route[] = [];

export const routeReducer = createReducer<Route[]>(initialState, builder => {
  builder.addCase(setRoutes, (state, action) => action.payload);
});
