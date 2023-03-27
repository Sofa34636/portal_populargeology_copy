import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { articleAPI } from '../services/ArticleService';
import { earthApi } from '../services/EarthService'
import timeLineReducer from './reducers/timeLineSlice';

const rootReducer = combineReducers({
  timeLineReducer,
  [articleAPI.reducerPath]: articleAPI.reducer,
  [earthApi.reducerPath]: earthApi.reducer,
});
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([articleAPI.middleware, earthApi.middleware])
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

