import thunk from 'redux-thunk';
import { backgroundMapReducer } from './reducers/backgroundMapReducer';
import { routeReducer } from './reducers/routeReducer';
import { trailReducer } from './reducers/trailReducer';
import { mapClassReducer } from './reducers/mapClassReducer';
import { formClassReducer } from './reducers/formClassReducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    backgroundMap: backgroundMapReducer,
    route: routeReducer,
    trail: trailReducer,
    mapClass: mapClassReducer,
    formClass: formClassReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk)
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
