import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Time, timeTypes } from '../../types/timeline';
import { getKeyByValue } from '../../pages/pageRedirect';
import { getApiUrl } from './getApiUrl'


export const exhibitAPI = createApi({
    reducerPath: 'exhibitAPI',
    baseQuery: fetchBaseQuery({ baseUrl: getApiUrl() }),
    endpoints: (build) => ({
        fetchAllExhibits: build.query({
            query: ({ limit, time }: { limit: number, time: Time }) => ({
                url: `/exhibit/?limit=${limit}&time=${getKeyByValue(timeTypes, time)}`,
                method: 'GET',
            })
        }),
        getExhibitById: build.query({
            query: ({ id, time }: { id: number, time: Time }) => ({
                url: `/exhibit/${id}/?time=${getKeyByValue(timeTypes, time)}`,
                method: 'GET'
            })
        })
    }),
});

export const { useFetchAllExhibitsQuery, useGetExhibitByIdQuery} = exhibitAPI;
