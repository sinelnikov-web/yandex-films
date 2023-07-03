import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {Film} from "@/entities/Film";

export const filmsApi = createApi({
    reducerPath: 'filmsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/api/'
    }),
    endpoints: (build) => ({
        fetchAllFilms: build.query<Film[], string | undefined>({
            query: (cinemaId = undefined) => ({
                url:  "movies/",
                params: {cinemaId}
            })
        }),
        fetchFilmById: build.query<Film, string | undefined>({
            query: (movieId = undefined) => ({
                url: "movie/",
                params: {movieId}
            })
        })
    }),
})

export const { useFetchAllFilmsQuery, useFetchFilmByIdQuery } = filmsApi