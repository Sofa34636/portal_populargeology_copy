import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IArticle } from '../../types/models/IArticle';

export const articleAPI = createApi({
  reducerPath: 'articleAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }),
  endpoints: (build) => ({
    fetchAllArticles: build.query<IArticle[], number>({
      query: (limit: number) => ({
        url: `/article/?limit=${limit}`,
      }),
    }),
    getArticleById: build.query<IArticle, number>({
      query: (id:number) => `/article/${id}`,
    }),
  }),
});

export const { useFetchAllArticlesQuery, useGetArticleByIdQuery} = articleAPI;
