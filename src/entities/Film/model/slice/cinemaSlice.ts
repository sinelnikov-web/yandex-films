import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const cinemaApi = createApi({
    reducerPath: 'cinemaApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/api/'
    }),
    endpoints: (build) => ({
        fetchAllCinemas: build.query<any, void>({
            query: () => ({
                url: `cinemas/`
            })
        }),
    }),
})

export const {useFetchAllCinemasQuery} = cinemaApi;
