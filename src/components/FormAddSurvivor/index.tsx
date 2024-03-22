'use client'

import * as React from 'react';

import { Box, Button, FormControlLabel, Grid, Menu, MenuItem, OutlinedInput, Select, SelectChangeEvent, Switch,
    TextField, Typography } from "@mui/material";

import {
    initialSurvivorDataState,
    survivorDataTypes
} from "./data";

import Map from '../Map';
import styles from '../../../styles/Home.module.scss';
import DraggableMarker from "../Map/DraggableMarker";
import SetMapAutoView from '../Map/SetMapAutoView';

import { inventoryDataConstants } from '../../components/FormAddSurvivor/constants';
import {useDispatch} from "react-redux";
import {setAddSurvivorData} from "./formAddSurvivorSlice";

const DEFAULT_CENTER = [14.577344676773237, 120.97768758650656]


const FormAddSurvivor = ({ errorFormFields }) => {
    const dispatch = useDispatch();

    const [lastLocation, setLastLocation] = React.useState(DEFAULT_CENTER);

    const [survivorData, setSurvivorData] = React.useState<survivorDataTypes>(
        {
            ...initialSurvivorDataState,
            lastLocation: { latitude: lastLocation[0], longitude: lastLocation[1] }
        }
    );

    const handleQuantityOnChange = (event, key: string) => {
        const value = event.target.value;

        const modifiedInventory = survivorData.inventory.map(obj => {
            if (obj.id === key) {
                return { ...obj, quantity: parseInt(value) };
            }
            return obj;
        });

        setSurvivorData(prevState => ({
            ...prevState,
            inventory: modifiedInventory
        }));
    }

    React.useEffect(() => {
        setSurvivorData(prevState => ({
            ...prevState, lastLocation: { latitude: lastLocation[0], longitude: lastLocation[1]}
        }));
    }, [lastLocation]);

    React.useEffect(() => {
        dispatch(setAddSurvivorData({
            addSurvivorData: survivorData
        }, ''))
    }, [survivorData]);

    return (
        <Box className="flex flex-col justify-start items-center" style={{ rowGap: '30px' }}>
            <Grid container spacing={2}>
                <Grid item xs={2} className="flex flex-row items-center">
                    <Typography>Name</Typography>
                </Grid>
                <Grid item xs={8}>
                    <TextField
                        fullWidth
                        hiddenLabel
                        defaultValue={survivorData.name}
                        variant="outlined"
                        size="small"
                        inputProps={{ style: {fontSize: '15px'} }}
                        onChange={(event) =>
                            setSurvivorData(prevState => ({...prevState, name: event.target.value})) }
                    />
                </Grid>
                <Grid item xs={2} className="flex flex-row items-center">
                    <Typography className={`text-red-500 ${errorFormFields.name ? '' : 'hidden'}`}
                                sx={{ fontSize: '13px' }}>* required name</Typography>
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={2} className="flex flex-row items-center">
                    <Typography>Age</Typography>
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        fullWidth
                        hiddenLabel
                        defaultValue={survivorData.age.toString()}
                        variant="outlined"
                        size="small"
                        inputProps={{ style: {fontSize: '15px'} }}
                        onChange={(event) =>
                            setSurvivorData(prevState => ({...prevState, age: parseInt(event.target.value)})) }
                    />
                </Grid>
                <Grid item xs={2} className="flex flex-row items-center">
                    <Typography className={`text-red-500 ${errorFormFields.age ? '' : 'hidden'}`}
                                sx={{ fontSize: '13px' }}>* required age</Typography>
                </Grid>

                <Grid item xs={1} className="flex flex-row items-center">
                    <Typography>Gender</Typography>
                </Grid>
                <Grid item xs={2} className="flex flex-row items-center">
                    <Select displayEmpty value={survivorData.gender}
                            input={<OutlinedInput sx={{fontSize: '14px'}} />}
                            onChange={(event: SelectChangeEvent<string>) =>
                                setSurvivorData(prevState => ({...prevState, gender: event.target.value}))}
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <em>Please Select</em>;
                                }
                                return selected;
                            }}
                            MenuProps={{ PaperProps: { style: { maxHeight: 48 * 4.5 + 8, width: 250, }, },}}
                            inputProps={{ 'aria-label': 'Without label', style: {fontSize: '15px'} }}
                            size="small">
                        <MenuItem disabled value="" sx={{ fontSize: '12px' }}>
                            <em>Please Select</em>
                        </MenuItem>
                        <MenuItem value="Male" sx={{ fontSize: '12px' }}>
                            <em>{"Male"}</em>
                        </MenuItem>
                        <MenuItem value="Female" sx={{ fontSize: '12px' }}>
                            <em>{"Female"}</em>
                        </MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={2} className="flex flex-row items-center">
                    <Typography className={`text-red-500 ${errorFormFields.gender ? '' : 'hidden'}`}
                                sx={{ fontSize: '13px' }}>* required gender</Typography>
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} className="flex flex-row items-center">
                            <Typography>Last Location</Typography>
                        </Grid>
                        <Grid item xs={3}>{}</Grid>
                        <Grid item xs={2} className="flex flex-row items-center">
                            <Typography className="text-sm">Latitude</Typography>
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                fullWidth
                                hiddenLabel
                                value={survivorData.lastLocation.latitude}
                                variant="outlined"
                                size="small"
                                inputProps={{ style: {fontSize: '15px'} }}
                                onChange={(event) => {
                                    setLastLocation(prevState => ([
                                        parseFloat(event.target.value),
                                        prevState[1]
                                    ]))
                                }}
                            />
                        </Grid>
                        <Grid item xs={2}>{}</Grid>
                        <Grid item xs={3}>{}</Grid>
                        <Grid item xs={2} className="flex flex-row items-center">
                            <Typography className="text-sm"> Longitude</Typography>
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                fullWidth
                                hiddenLabel
                                value={survivorData.lastLocation.longitude}
                                variant="outlined"
                                size="small"
                                inputProps={{ style: {fontSize: '15px'} }}
                                onChange={(event) =>
                                    setLastLocation(prevState => ([
                                        prevState[0],
                                        parseFloat(event.target.value)
                                    ]))
                                }
                            />
                        </Grid>
                        <Grid item xs={2}>{}</Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Map className={styles} style={{ height: '200px', width: '400px' }}
                         center={lastLocation} zoom={12}>
                        {({ TileLayer, Marker, Popup }) => {
                            return(<>
                                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"/>
                                <DraggableMarker defaultCenter={lastLocation} Marker={Marker} Popup={Popup}
                                                 position={lastLocation} setPosition={setLastLocation} />
                                <SetMapAutoView lat={lastLocation[0]} lng={lastLocation[1]} />
                            </>)
                        }}
                    </Map>
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} className="flex flex-row items-center">
                            <Typography>Inventory</Typography>
                        </Grid>
                        { survivorData && survivorData.inventory && survivorData.inventory.length > 0 &&
                            survivorData.inventory.map((data, index) => {
                                return ( <Grid item xs={12}>{}</Grid> );
                            })
                        }
                    </Grid>
                </Grid>

                <Grid item xs={10}>
                    <Grid container spacing={2}>
                        { survivorData && survivorData.inventory && survivorData.inventory.length > 0 &&
                            survivorData.inventory.map((data, index) => {
                                if (data.id != "") {
                                    return (
                                        <Grid item xs={12}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={3} className="flex flex-row items-center">
                                                    <Typography className="text-sm" key={data.id}>
                                                        {data.label}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <TextField key={data.id} name={data.label} variant="outlined"
                                                               value={data.quantity}
                                                               onChange={(e) =>
                                                                   handleQuantityOnChange(e, data.id)}
                                                               size="small" />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    )
                                }
                            })
                        }
                        <Grid item xs={12}>
                            <Select displayEmpty value={''}
                                    input={<OutlinedInput sx={{fontSize: '14px'}} />}
                                    // onChange={(event: SelectChangeEvent<string>) =>
                                    //     setSurvivorData(prevState => ({
                                    //         ...prevState,
                                    //         inventory: [
                                    //             ...prevState.inventory,
                                    //             { id: event.target.name, label: event.target.value, quantity: 0 } ]
                                    //     }))
                                    // }
                                    renderValue={(selected) => {
                                        if (selected.length === 0) {
                                            return <em>Add an Inventory</em>;
                                        }
                                        return selected;
                                    }}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    size="small">
                                <MenuItem disabled value="" sx={{ fontSize: '12px' }}>
                                    <em>Please Select</em>
                                </MenuItem>
                                { Object.entries(inventoryDataConstants).map((data, index) => {
                                    const selectedInventoryList = survivorData.inventory.map(inData => inData.label);

                                    if (!selectedInventoryList.includes(data[1].label)) {
                                        return (
                                            <MenuItem
                                                key={data[0]} name={data[0]} value={data[1].label}
                                                sx={{ fontSize: '12px' }}
                                                onClick={() =>
                                                    setSurvivorData(prevState => ({
                                                        ...prevState,
                                                        inventory: [
                                                            ...prevState.inventory,
                                                            { id: data[0], label: data[1].label, quantity: 0 } ]
                                                    }))}>
                                                <em>{data[1].label}</em>
                                            </MenuItem>
                                        )
                                    }
                                })}
                            </Select>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={2} className="flex flex-row items-center">
                    <Typography>Infected</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Switch inputProps={{'aria-label': 'Is Infected?'}} checked={survivorData.infected}
                            onChange={(event) =>
                                setSurvivorData(prevState => ({...prevState, infected: event.target.checked}))} />
                </Grid>
                <Grid item xs={2} className="flex flex-row items-center">{}</Grid>
            </Grid>
        </Box>
    );
}

export default FormAddSurvivor;
