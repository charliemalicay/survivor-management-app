import { createSlice } from "@reduxjs/toolkit";

export interface topNavbarState {
    userMenuEvent: HTMLElement | null
}

const initialState: topNavbarState = {
    userMenuEvent: null
}

export const topNavbarSlice = createSlice({
    name: 'topNavbarVar',
    initialState,
    reducers: {
        setUserMenuEvent(state, action) {
            state.userMenuEvent = action.payload.userMenuEvent;
        }
    },
});

export const {
    setUserMenuEvent
} = topNavbarSlice.actions;

export default topNavbarSlice.reducer;
