import { createSlice } from "@reduxjs/toolkit";
import {inventoryTypes, lastLocationTypes} from "../components/FormAddSurvivor/data";


export interface survivorIDDataTypes {
    id: number
    name: string
    age: number
    gender: string
    lastLocation: lastLocationTypes
    inventory: inventoryTypes[]
    infected: boolean
}


export interface dashboardState {
    survivorDashboardData: survivorIDDataTypes[]
}

const initialState: dashboardState = {
    survivorDashboardData: []
}

export const dashboardSlice = createSlice({
    name: 'dashboardVar',
    initialState,
    reducers: {
        setSurvivorDashboardData(state, action) {
            state.survivorDashboardData = action.payload.survivorDashboardData;
        }
    },
});


export const {
    setSurvivorDashboardData
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
