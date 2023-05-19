import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IEarth} from '../../types/models/IEarth';
import { getApiUrl } from './getApiUrl'
import { REHYDRATE } from 'redux-persist'

export const earthApi = createApi({
  reducerPath: 'earthApi',
  baseQuery: fetchBaseQuery({ baseUrl: getApiUrl() }),
  endpoints: (build) => ({
    getEarthById: build.query<IEarth, number>({
      query: (id:number) => `/earth/${id}`,
    }),
  }),

});

export const { useGetEarthByIdQuery } = earthApi;
