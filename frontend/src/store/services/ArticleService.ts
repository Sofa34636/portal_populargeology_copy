import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IArticle } from '../../types/models/IArticle';
import { Time } from '../../types/timeline'

export const articleAPI = createApi({
  reducerPath: 'articleAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }),
  endpoints: (build) => ({
    fetchAllArticles: build.query({
      query: ({ string: limit, Time: time = null } ) => {
        return {
          url: `/article/?limit=${limit}&?time=${time}`
        }
      }
    }),
    getArticleById: build.query<IArticle, number>({
      query: (id:number) => `/article/${id}`,
    }),
  }),
});

export const { useFetchAllArticlesQuery, useGetArticleByIdQuery} = articleAPI;

