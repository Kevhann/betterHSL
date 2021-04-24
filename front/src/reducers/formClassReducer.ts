import { createAction, createReducer } from '@reduxjs/toolkit';

type FormClassState = 'startForm' | 'resultsForm';

export const setFormClass = createAction<FormClassState>('SET_FORM_CLASS');

const initialState = 'startForm';

export const formClassReducer = createReducer<FormClassState>(initialState, builder => {
  builder.addCase(setFormClass, (state, action) => action.payload);
});
