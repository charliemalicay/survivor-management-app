'use client'

import * as React from 'react';

import Image from "next/image";

import {Box, Button} from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Icon } from '@iconify/react';
import {dummySurvivorsData} from "../app/constants";
import {CustomDataGrid, CustomPagination} from "../widgets/CustomDataGrid";
import {useDispatch, useSelector} from "react-redux";
import {setOpenAddSurvivorModal, survivorListState} from "../app/survivor-list/survivorListSlice";
import {inventoryTypes, lastLocationTypes} from "./FormAddSurvivor/data";
import {setSurvivorDashboardData} from "../app/dashboardSlice";


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'name', headerName: 'NAME', width: 150, editable: true, },
  { field: 'age', headerName: 'AGE', type: 'number', width: 50, editable: true, },
  { field: 'gender', headerName: 'GENDER', width: 90, editable: true, },
  { field: 'lastLocation', headerName: 'LAST LOCATION', width: 400,
    valueGetter: (params: GridValueGetterParams) => {
      return `Latitude: ${params.value.latitude}, Longitude: ${params.value.longitude}`;
    },},
  { field: 'inventory', headerName: 'INVENTORY', width: 400,
    valueGetter: (params: GridValueGetterParams) => {
      let resultStr = "";
      params.value.map(data => resultStr += `${data.label}: ${data.quantity}, `);
      return resultStr;
    },
  },
  { field: 'infected', headerName: 'INFECTED', width: 160, },
];

export interface survivorDataItemTypes {
  id: number,
  name: string,
  age: number,
  gender: string,
  lastLocation: lastLocationTypes,
  inventory: inventoryTypes[],
  infected: boolean
}

const ListPanel = () => {
  const PAGE_SIZE = 10;
  const dispatch = useDispatch();

  const survivorListDataState = useSelector((state: { survivorListVarData: survivorListState }) =>
      state.survivorListVarData);

  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: PAGE_SIZE,
    page: 0,
  });

  const [survivorDataList, setSurvivorDataList] = React.useState<survivorDataItemTypes[]>([]);

  const handleAddSurvivorClick = () => {
    dispatch(setOpenAddSurvivorModal({
      openAddSurvivorModal: true
    }, ''))
  }

  React.useEffect(() => {
    setSurvivorDataList(dummySurvivorsData);
  }, []);

  React.useEffect(() => {
    if (survivorDataList.length > 0) {
      dispatch(setSurvivorDashboardData({
        survivorDashboardData: survivorDataList
      }, ''))
    }
  }, [survivorDataList])

  React.useEffect(() => {
    if (survivorListDataState.survivorData.name !== '' && survivorListDataState.survivorData.age !== 0 &&
        survivorListDataState.survivorData.gender !== '') {
      const newData = {
        id: 10,
        ...survivorListDataState.survivorData
      }
      setSurvivorDataList(prevState => [...prevState, newData]);
    }
  }, [survivorListDataState]);

  // React.useEffect(() => {
  //   console.log("survivorDataList:", survivorDataList);
  // }, [survivorDataList])

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark
                    dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <Box className="flex flex-row items-center justify-between w-full p-4">
        <h4 className="text-xl font-semibold text-black">
          Survivors Record
        </h4>
        <Button variant="text" className="bg-green-600 hover:bg-green-200 text-white py-2.5 px-4 normal-case"
                onClick={() => handleAddSurvivorClick()}
                startIcon={<Icon icon="heroicons-solid:user-add" width="25" height="25"  style={{color: 'white'}} />}>
          Add Survivor
        </Button>
      </Box>

      <CustomDataGrid
          rows={survivorDataList}
          columns={columns}
          checkboxSelection
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[PAGE_SIZE]}
          slots={{
            pagination: CustomPagination,
          }}
      />
    </div>
  );
};

export default ListPanel;
