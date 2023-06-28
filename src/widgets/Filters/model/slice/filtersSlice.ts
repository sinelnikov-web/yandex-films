import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    cinemaId: null,
    genreId: null,
    title: ''
};

export const filtersSlice = createSlice({
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
