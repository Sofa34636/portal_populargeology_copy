import { configureStore } from '@reduxjs/toolkit';
import { articleAPI } from '../services/ArticleService';
import { earthApi } from '../services/EarthService'

export const store = configureStore({
  reducer: {
    [articleAPI.reducerPath]: articleAPI.reducer,
    [earthApi.reducerPath]: earthApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([articleAPI.middleware, earthApi.middleware])
});
