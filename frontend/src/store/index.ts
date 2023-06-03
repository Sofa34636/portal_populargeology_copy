import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { articleAPI } from './services/ArticleService';
import { earthApi } from './services/EarthService'
import { exhibitAPI } from "./services/ExhibitService";
import { videoApi } from './services/VideoService'
import { locationAPI } from "./services/LocationService";
import {reconstructionAPI} from "./services/ReconstructionService";
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
  [exhibitAPI.reducerPath]: exhibitAPI.reducer,
  [videoApi.reducerPath]: videoApi.reducer,
  [locationAPI.reducerPath]: locationAPI.reducer,
  [reconstructionAPI.reducerPath]: reconstructionAPI.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const setupStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat([articleAPI.middleware,
        earthApi.middleware,
        exhibitAPI.middleware,
        videoApi.middleware,
        locationAPI.middleware,
        reconstructionAPI.middleware,
      ])
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

