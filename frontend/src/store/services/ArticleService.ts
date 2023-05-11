import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IArticle } from '../../types/models/IArticle';
import { Time, timeTypes } from '../../types/timeline';
import { getKeyByValue } from '../../pages/pageRedirect';

const getApiUrl = () =>
  window.location.origin
    .split(':')
    .filter((e, i) => i != 2)
    .join(':') + `:{${process.env.API_PORT}}`;

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
