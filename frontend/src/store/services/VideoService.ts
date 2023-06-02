import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IVideo} from '../../types/models/IVideo';
import { getApiUrl } from './getApiUrl'
import { Time } from '../../types/timeline'
export const videoApi = createApi({
  reducerPath: 'videoApi',
  baseQuery: fetchBaseQuery({ baseUrl: getApiUrl() }),
  endpoints: (build) => ({
    getVideoByTime: build.query<IVideo, Time>({
      query: (time: Time) => `/video/?time=${time}`,
    }),
  }),
});

export const { useGetVideoByTimeQuery } = videoApi;
