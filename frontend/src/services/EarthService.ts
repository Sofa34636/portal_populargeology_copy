import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IEarth} from '../models/IEarth';

export const earthApi = createApi({
  reducerPath: 'earthApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }),
  endpoints: (build) => ({
    getEarthById: build.query<IEarth, number>({
      query: (id:number) => `/earth/${id}`,
    }),
  }),
});

export const { useGetEarthByIdQuery } = earthApi;
