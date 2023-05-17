import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IVideo} from '../../types/models/IVideo';
import { getApiUrl } from './getApiUrl'

export const videoApi = createApi({
  reducerPath: 'videoApi',
  baseQuery: fetchBaseQuery({ baseUrl: getApiUrl() }),
  endpoints: (build) => ({
    getEarthById: build.query<IVideo, number>({
      query: (id:number) => `/video/${id}`,
    }),
  }),
});

export const { useGetEarthByIdQuery } = videoApi;
