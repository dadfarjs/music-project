import { combineReducers } from 'redux';
import { musicApiSlice } from './query/musicApiSlice';
import musicReducer from './slices/musicSlice';

export const rootReducer = combineReducers({
  musicSlice: musicReducer,
  [musicApiSlice.reducerPath]: musicApiSlice.reducer,
});
