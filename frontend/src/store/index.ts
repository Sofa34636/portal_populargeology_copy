import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { articleAPI } from './services/ArticleService';
import { earthApi } from './services/EarthService'
import timeLineReducer from './reducers/timeLineSlice';
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist"

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const rootReducer = combineReducers({
  timeLineReducer,
  [articleAPI.reducerPath]: articleAPI.reducer,
  [earthApi.reducerPath]: earthApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const setupStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat([articleAPI.middleware, earthApi.middleware])
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

