import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
// import { createWrapper } from "next-redux-wrapper";
// import { persistReducer, persistStore } from "redux-persist";
// import storageSession from "redux-persist/lib/storage/session";

import { rootReducer } from './RootReducer';
import { queryMiddlewares } from './middleware';

// const persistConfig = {
//   key: "app",
//   storage: storageSession,
// };

// const persistedReducer: any = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(queryMiddlewares),
  devTools: true,
});

// export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
