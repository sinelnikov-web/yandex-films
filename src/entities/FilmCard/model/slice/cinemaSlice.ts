import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Film} from "@/entities/FilmCard/model/types/filmsState";

export const cinemaApi = createApi({
    reducerPath: 'cinemaApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/api/'
    }),
    endpoints: (build) => ({
        fetchAllCinemas: build.query<Film[], void>({
            query: () => ({
                url: `cinemas/`
            })
        }),
    }),
})

export const {useFetchAllCinemasQuery} = cinemaApi;
