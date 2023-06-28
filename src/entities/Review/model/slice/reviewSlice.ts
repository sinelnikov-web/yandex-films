import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {ReviewType} from "../types/reviewType";

export const reviewApi = createApi({
    reducerPath: 'reviewApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/api/'
    }),
    endpoints: (build) => ({
        fetchReviewsByFilmId: build.query<ReviewType[], string>({
            query: (movieId) => ({
                url:  "reviews/",
                params: {movieId}
            })
        }),
    }),
})

export const { useFetchReviewsByFilmIdQuery } = reviewApi
