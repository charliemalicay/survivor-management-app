'use client'

import * as React from 'react';

import { Box } from "@mui/material";

import { Button, DialogTitle, DialogContent, Modal, ModalDialog } from '@mui/joy';
import { Transition } from 'react-transition-group';
import {
    setOpenAddSurvivorModal,
    setSurvivorData,
    survivorListSlice,
    survivorListState
} from "../app/survivor-list/survivorListSlice";
import {useDispatch, useSelector} from "react-redux";

import SelectGroupOne from "../widgets/SelectGroupOne";
import FormAddSurvivor from "./FormAddSurvivor";
import dynamic from "next/dynamic";
import {formAddSurvivorState} from "./FormAddSurvivor/formAddSurvivorSlice";


interface errorFormFieldsTypes {
    name: boolean
    age: boolean
    gender: boolean
}


const AddUserModal = () => {
    const dispatch = useDispatch();

    const formAddSurvivorDataState = useSelector((state: { formAddSurvivorVarData: formAddSurvivorState }) =>
        state.formAddSurvivorVarData);
    const survivorListDataState = useSelector((state: { survivorListVarData: survivorListState }) =>
        state.survivorListVarData);

    const [open, setOpen] = React.useState<boolean>(false);

    const [errorFormFields, setErrorFormFields] = React.useState<errorFormFieldsTypes>(
        {
            name: false,
            age: false,
            gender: false
        });

    const handleOnCloseModal = () => {
        setOpen(false);
        dispatch(setOpenAddSurvivorModal({
            openAddSurvivorModal: false
        }, ''))
    }

    const handleSubmitFormatClick = () => {
        const addingSurvivorData = formAddSurvivorDataState.addSurvivorData;
        const errorNameFile = addingSurvivorData.name === "" || !addingSurvivorData.name;
        const errorAgeFile = !addingSurvivorData.age || addingSurvivorData.age < 0;
        const errorGenderFile = !addingSurvivorData.gender || addingSurvivorData.gender === "";

        setErrorFormFields({
            name: errorNameFile,
            age: errorAgeFile,
            gender: errorGenderFile
        });

        if (!errorNameFile && !errorAgeFile && !errorGenderFile) {
            const addInventory = addingSurvivorData.inventory.filter(data => data.id.length > 0 && data.quantity > 0);

            dispatch(
                setSurvivorData({
                    survivorData: {
                        name: addingSurvivorData.name,
                        age: addingSurvivorData.age,
                        gender: addingSurvivorData.gender.toLowerCase(),
                        lastLocation: {
                            latitude: addingSurvivorData.lastLocation.latitude,
                            longitude: addingSurvivorData.lastLocation.longitude
                        },
                        inventory: addInventory,
                        infected: addingSurvivorData.infected
                    }
                }, '')
            )
        }

        handleOnCloseModal();
    }

    React.useEffect(() => {
        setOpen(survivorListDataState.openAddSurvivorModal);
    }, [survivorListDataState]);

    return (
        <React.Fragment>
            <Transition in={open} timeout={400}>
                {(state: string) => (
                    <Modal keepMounted open={!['exited', 'exiting'].includes(state)} onClose={handleOnCloseModal}
                           slotProps={{
                               backdrop: {
                                   sx: {
                                       opacity: 0,
                                       backdropFilter: 'none',
                                       transition: `opacity 400ms, backdrop-filter 400ms`,
                                       ...{
                                           entering: { opacity: 1, backdropFilter: 'blur(8px)' },
                                           entered: { opacity: 1, backdropFilter: 'blur(8px)' },
                                       }[state],
                                   },
                               },
                           }}
                           sx={{ visibility: state === 'exited' ? 'hidden' : 'visible', }} >
                        <ModalDialog
                            sx={{
                                width: '50%',
                                opacity: 0,
                                transition: `opacity 300ms`,
                                ...{ entering: { opacity: 1 }, entered: { opacity: 1 },}[state],
                            }} >
                            <DialogTitle>Add Survivor Information</DialogTitle>
                            <DialogContent>
                                <Box className="rounded-lg border border-gray-300 border-solid px-6 py-4">
                                    <FormAddSurvivor errorFormFields={errorFormFields} />
                                </Box>
                            </DialogContent>
                            <Box className="w-full flex flex-row items-center justify-end gap-x-4">
                                <Button variant="outlined" className="border-green-500 hover:bg-green-200
                                                                      text-green-500"
                                        onClick={() => handleOnCloseModal()}>
                                    Cancel
                                </Button>
                                <Button variant="solid" className="bg-green-500 hover:bg-green-400 text-gray-100"
                                        onClick={() => handleSubmitFormatClick()}>
                                    Save
                                </Button>
                            </Box>
                        </ModalDialog>
                    </Modal>
                )}
            </Transition>
        </React.Fragment>
    );
}

export default AddUserModal;
