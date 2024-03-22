'use client'

import * as React from 'react';
import {Box, Container} from "@mui/material";
import TopNavbar from "../../components/TopNavbar";
import Footer from "../../components/Footer";
import SurvivorListPanel from "../../components/SurvivorListPanel";
import AddUserModal from "../../components/AddUserModal";


import Map from '../../components/Map';
import styles from "../../../styles/Home.module.scss";


const DEFAULT_CENTER = [38.907132, -77.036546]

const Page = () => {
    return (
        <Container maxWidth={false} style={{ padding: 0 }}>
            <TopNavbar />
            <SurvivorListPanel />
            <AddUserModal />
            <Footer />
        </Container>
    )
}

export default Page;
