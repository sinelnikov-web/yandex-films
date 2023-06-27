import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {Film} from "@/entities/FilmCard/model/types/filmsState";

export const filmsApi = createApi({
    reducerPath: 'filmsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/api/'
    }),
    endpoints: (build) => ({
        fetchAllFilms: build.query<Film[], string>({
            query: (cinemaId) => ({
                url:  "movies/",
                params: {cinemaId}
            })
        }),
        fetchFilmById: build.query<Film, string>({
            query: (movieId) => ({
                url: "movie/",
                params: {movieId}
            })
        })
    }),
})

export const { useFetchAllFilmsQuery, useFetchFilmByIdQuery } = filmsApi