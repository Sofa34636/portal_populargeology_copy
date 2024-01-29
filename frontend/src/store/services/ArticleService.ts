import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Time, timeTypes } from '../../types/timeline';
import { getKeyByValue } from '../../pages/pageRedirect';
import { getApiUrl } from './getApiUrl'


export const articleAPI = createApi({
  reducerPath: 'articleAPI',
  baseQuery: fetchBaseQuery({ baseUrl: getApiUrl() }),
  endpoints: (build) => ({
    fetchAllArticles: build.query({
      query: ({ limit, time }: { limit: number; time: Time }) => ({
        url: `/article/?limit=${limit}&time=${getKeyByValue(timeTypes, time)}`,
        method: 'GET',
      }),
    }),
    getArticleById: build.query({
      query: ({ id, time }: { id: number; time: Time }) => ({
        url: `/article/${id}/?time=${getKeyByValue(timeTypes, time)}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useFetchAllArticlesQuery, useGetArticleByIdQuery } = articleAPI;
