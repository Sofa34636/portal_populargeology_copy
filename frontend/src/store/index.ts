import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { articleAPI } from './services/ArticleService';
import { earthApi } from './services/EarthService'
import { exhibitAPI } from "./services/ExhibitService";
import timeLineReducer from './reducers/timeLineSlice';
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist"
import { videoApi } from './services/VideoService'


const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const rootReducer = combineReducers({
  timeLineReducer,
  [articleAPI.reducerPath]: articleAPI.reducer,
  [earthApi.reducerPath]: earthApi.reducer,
  [exhibitAPI.reducerPath]: exhibitAPI.reducer,
  [videoApi.reducerPath]: videoApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const setupStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat([articleAPI.middleware, earthApi.middleware, exhibitAPI.middleware, videoApi.middleware])
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

