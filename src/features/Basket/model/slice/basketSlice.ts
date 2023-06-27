import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {};

type InitialStateType = typeof initialState;

export const basketSlice = createSlice<InitialStateType>({
    name: 'basket',
    initialState,
    reducers: {
        addTicket(state, action: PayloadAction<string>) {
            state[action.payload] = Math.min((state[action.payload] ?? 0) + 1, 30);
        },
        removeTicket(state, action: PayloadAction<string>) {
            if (!state[action.payload]) {
                return;
            }
            if (state[action.payload] === 1) {
                delete state[action.payload];
                return;
            }
            state[action.payload]--;
        },
        removeAllTickets(state, action: PayloadAction<string>) {
            if (!state[action.payload]) {
                return;
            }
            delete state[action.payload];
        },
    }
});

export const {reducer: basketReducer} = basketSlice;
export const {actions: basketActions} = basketSlice;