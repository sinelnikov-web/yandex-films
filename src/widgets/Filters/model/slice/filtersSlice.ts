import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    cinemaId: null,
    genreId: null,
    title: ''
};

type InitialStateType = typeof initialState;

export const filtersSlice = createSlice<InitialStateType>({
    name: 'filters',
    initialState,
    reducers: {
        changeFilter(state, action: PayloadAction<{name: string; value: string | null}>) {
            state[action.payload.name] = action.payload.value;
        },
    }
});

export const {reducer: filtersReducer} = filtersSlice;
export const {actions: filtersActions} = filtersSlice;
