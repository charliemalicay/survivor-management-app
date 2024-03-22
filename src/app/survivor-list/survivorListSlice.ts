import { createSlice } from "@reduxjs/toolkit";
import { survivorDataTypes } from "../../components/FormAddSurvivor/data";

export interface survivorListState {
    openAddSurvivorModal: boolean
    survivorData: survivorDataTypes
}

const initialState: survivorListState = {
    openAddSurvivorModal: false,
    survivorData: {
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

export const survivorListSlice = createSlice({
    name: 'survivorListVar',
    initialState,
    reducers: {
        setOpenAddSurvivorModal(state, action) {
            state.openAddSurvivorModal = action.payload.openAddSurvivorModal;
        },
        setSurvivorData(state, action) {
            state.survivorData = action.payload.survivorData;
        }
    },
});

export const {
    setOpenAddSurvivorModal,
    setSurvivorData
} = survivorListSlice.actions;

export default survivorListSlice.reducer;
