import {configureStore} from "@reduxjs/toolkit";
import {cinemaApi, filmsApi} from "@/entities/FilmCard";
import {basketReducer} from "@/features/Basket";
import {filtersReducer} from "@/widgets/Filters";
import {reviewApi} from "@/entities/Review";


export function createReduxStore(initialState) {
    return configureStore({
        reducer: {
            [filmsApi.reducerPath]: filmsApi.reducer,
            [cinemaApi.reducerPath]: cinemaApi.reducer,
            [reviewApi.reducerPath]: reviewApi.reducer,
            basket: basketReducer,
            filters: filtersReducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
            filmsApi.middleware,
            cinemaApi.middleware,
            reviewApi.middleware,
        ),
        devTools: process.env.NODE_ENV !== 'production',
        preloadedState: initialState
    })
}