'use client';

import { configureStore } from '@reduxjs/toolkit';

import dashboardSliceReducer from "../app/dashboardSlice";
import formAddSurvivorSliceReducer from "../components/FormAddSurvivor/formAddSurvivorSlice";
import survivorListSliceReducer from '../app/survivor-list/survivorListSlice';
import topNavbarSliceReducer from '../components/topNavbarSlice';


const makeStore = configureStore({
    reducer: {
        dashboardVarData: dashboardSliceReducer,
        formAddSurvivorVarData: formAddSurvivorSliceReducer,
        survivorListVarData: survivorListSliceReducer,
        topNavbarVarData: topNavbarSliceReducer,
    }
});

export default makeStore;
