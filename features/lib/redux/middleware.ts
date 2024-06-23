import { Dispatch } from 'redux';
import { musicApiSlice } from './query/musicApiSlice';

export const queryMiddlewares = [musicApiSlice.middleware];

export const resetCacheBySignOut = () => (dispatch: Dispatch) => {
  dispatch(musicApiSlice.util.resetApiState());
};
