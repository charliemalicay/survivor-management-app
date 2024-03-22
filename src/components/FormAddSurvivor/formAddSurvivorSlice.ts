import { createSlice } from "@reduxjs/toolkit";
import { survivorDataTypes } from "./data";

export interface formAddSurvivorState {
    addSurvivorData: survivorDataTypes
}

const initialState: formAddSurvivorState = {
    addSurvivorData: {
        name: "",
        age: 0,
        gender: "",
        lastLocation: {
            latitude: -1,
            longitude: -1
        },
        inventory: [
            {id: "", label: "", quantity: -1}
        ],
        infected: false
    }
}

export const formAddSurvivorSlice = createSlice({
    name: 'formAddSurvivorVar',
    initialState,
    reducers: {
        setAddSurvivorData(state, action) {
            state.addSurvivorData = action.payload.addSurvivorData;
        }
    },
});

export const {
    setAddSurvivorData
} = formAddSurvivorSlice.actions;

export default formAddSurvivorSlice.reducer;
