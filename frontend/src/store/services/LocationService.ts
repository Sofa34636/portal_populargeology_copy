import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Time, timeTypes } from '../../types/timeline';
import { getKeyByValue } from '../../pages/pageRedirect';
import { getApiUrl } from './getApiUrl'


export const locationAPI = createApi({
    reducerPath: 'locationAPI',
    baseQuery: fetchBaseQuery({ baseUrl: getApiUrl() }),
    endpoints: (build) => ({
        fetchAllLocations: build.query({
            query: (limit:number) => ({
                url: `/location/?limit=${limit}`,
                method: 'GET',
            })
        }),
        getLocationById: build.query({
            query: (id:number) => ({
                url: `/location/${id}`,
                method: 'GET'
            })
        })
    }),
});

export const { useFetchAllLocationsQuery, useGetLocationByIdQuery} = locationAPI;
