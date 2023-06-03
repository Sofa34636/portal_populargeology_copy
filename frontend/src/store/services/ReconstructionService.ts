import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getApiUrl } from './getApiUrl'


export const reconstructionAPI = createApi({
    reducerPath: 'reconstructionAPI',
    baseQuery: fetchBaseQuery({ baseUrl: getApiUrl() }),
    endpoints: (build) => ({
        fetchAllReconstructions: build.query({
            query: ({ limit, locationId }: { limit: number, locationId: number }) => ({
                url: `/reconstruction/?limit=${limit}&location=${locationId}`,
                method: 'GET',
            })
        }),
        getReconstructionById: build.query({
            query: ({ id, locationId }: { id: number, locationId: number }) => ({
                url: `/reconstruction/${id}/?location=${locationId}`,
                method: 'GET'
            })
        })
    }),
});

export const { useFetchAllReconstructionsQuery, useGetReconstructionByIdQuery} = reconstructionAPI;
