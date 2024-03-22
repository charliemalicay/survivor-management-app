'use client'

import * as React from 'react';
import {Box, Typography} from "@mui/material";

import { Icon } from '@iconify/react';
import {useSelector} from "react-redux";
import {survivorListState} from "../app/survivor-list/survivorListSlice";
import {dashboardSlice, dashboardState} from "../app/dashboardSlice";
import DashboardCard from "./DashboardCard";
import {dummySurvivorsData} from "../app/constants";
import DashboardPercentageCard from "./DashboardPercentageCard";
import {survivorDataTypes} from "./FormAddSurvivor/data";
import {survivorDataItemTypes} from "./ListPanel";


interface totalQuantitiesTypes {
    totalWater: number
    totalFood: number
    totalMedicine: number
    totalVaccine: number
}


const DashboardPanel = () => {
    const [totalSurvivors, setTotalSurvivors] = React.useState<number>(dummySurvivorsData.length);
    const [infectedSurvivors, setInfectedSurvivors] = React.useState<number>(
        dummySurvivorsData.filter(data => data.infected).length);
    const [notInfectedSurvivors, setNotInfectedSurvivors] = React.useState<number>(
        dummySurvivorsData.filter(data => !data.infected).length);

    const [totalMaleSurvivors, setTotalMaleSurvivors] = React.useState<number>(
        dummySurvivorsData.filter(data => data.gender === 'male').length);

    const [totalFemaleSurvivors, setTotalFemaleSurvivors] = React.useState<number>(
        dummySurvivorsData.filter(data => data.gender === 'female').length);

    const [totalQuantity, setTotalQuantity] = React.useState<totalQuantitiesTypes>({
        totalWater: 0, totalFood: 0, totalMedicine: 0, totalVaccine: 0
    })

    const dashboardDataState = useSelector((state: { dashboardVarData: dashboardState }) =>
        state.dashboardVarData);

    const calculateQuantitiesInventory = (dataList: survivorDataItemTypes[]) => {
        let totalWater: number = 0, totalFood: number = 0, totalMedicine: number = 0, totalVaccine: number = 0;

        dataList.map(data => {
            const dataInventory = data.inventory;

            totalWater += dataInventory
                .map(data => {if (data.id === 'water') return data.quantity; else return 0 })
                .reduce((partialSum, a) => partialSum + a, 0);

            totalFood += dataInventory
                .map(data => {if (data.id === 'food') return data.quantity; else return 0 })
                .reduce((partialSum, a) => partialSum + a, 0);

            totalMedicine += dataInventory
                .map(data => {if (data.id === 'medication') return data.quantity; else return 0 })
                .reduce((partialSum, a) => partialSum + a, 0);

            totalVaccine += dataInventory
                .map(data => {if (data.id === 'cVirusVaccine') return data.quantity; else return 0 })
                .reduce((partialSum, a) => partialSum + a, 0);

            return dataInventory;
        });

        setTotalQuantity({
            totalWater: totalWater,
            totalFood: totalFood,
            totalMedicine: totalMedicine,
            totalVaccine: totalVaccine,
        })
    }

    React.useEffect(() => {
        calculateQuantitiesInventory(dummySurvivorsData);
    }, []);

    React.useEffect(() => {
        const survivorData = dashboardDataState.survivorDashboardData;

        if (survivorData.length > 0) {
            setTotalSurvivors(survivorData.length);
            setInfectedSurvivors(survivorData.filter(data => data.infected).length);
            setNotInfectedSurvivors(survivorData.filter(data => !data.infected).length);

            setTotalMaleSurvivors(survivorData.filter(data => data.gender === 'male').length);
            setTotalFemaleSurvivors(survivorData.filter(data => data.gender === 'female').length);

            calculateQuantitiesInventory(survivorData);
        }
    }, [dashboardDataState]);

    return (
        <Box className="container w-full mx-auto pt-24">
            <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
                <Box className="h-auto w-full p-3 flex flex-row gap-x-4">
                    <DashboardPercentageCard
                        icon="covid:covid19-virus-reinfected"
                        iconColor="bg-red-500"
                        borderColor="border-red-600"
                        label="Percentage of Infected Survivors"
                        percentageValue={Math.round((infectedSurvivors/totalSurvivors) * 100).toFixed(2)}/>

                    <DashboardPercentageCard
                        icon="covid:mutation-stronger"
                        iconColor="bg-green-500"
                        borderColor="border-green-600"
                        label="Percentage of Not Infected Survivors"
                        percentageValue={Math.round((notInfectedSurvivors/totalSurvivors) * 100).toFixed(2)}/>
                </Box>

                <hr className="border-b-2 border-gray-400 my-8 mx-4" />

                <div className="flex flex-wrap">
                    <DashboardCard cardTitle="Total Survivors" iconString="fluent:people-team-toolbox-20-filled"
                                   iconColor="bg-gray-600" cardValue={totalSurvivors} />

                    <DashboardCard cardTitle="Total Infected" iconString="covid:covid19-virus-reinfected"
                                   iconColor="bg-red-600" cardValue={infectedSurvivors} />

                    <DashboardCard cardTitle="Total Not Infected" iconString="covid:mutation-stronger"
                                   iconColor="bg-green-600" cardValue={notInfectedSurvivors} />

                    <DashboardCard cardTitle="Total Male Survivors" iconString="map:male"
                                   iconColor="bg-blue-600" cardValue={totalMaleSurvivors} />

                    <DashboardCard cardTitle="Total Female Survivors" iconString="map:female"
                                   iconColor="bg-rose-600" cardValue={totalFemaleSurvivors} />
                </div>

                <hr className="border-b-2 border-gray-400 my-8 mx-4" />

                <div className="flex flex-wrap">
                    <DashboardCard cardTitle="Total Water Supply" iconString="ion:water-outline"
                                   iconColor="bg-blue-600" cardValue={totalQuantity.totalWater} />

                    <DashboardCard cardTitle="Total Food Supply" iconString="mdi:food-outline"
                                   iconColor="bg-green-600" cardValue={totalQuantity.totalFood} />

                    <DashboardCard cardTitle="Total Medicine Supply" iconString="icon-park-outline:medicine-bottle-one"
                                   iconColor="bg-yellow-600" cardValue={totalQuantity.totalMedicine} />

                    <DashboardCard cardTitle="Total C-Virus Vaccine Supply"
                                   iconString="fontisto:injection-syringe"
                                   iconColor="bg-gray-600" cardValue={totalQuantity.totalVaccine} />
                </div>

                <hr className="border-b-2 border-gray-400 my-8 mx-4" />

                <div className="flex flex-row flex-wrap flex-grow mt-2">
                    <div className="w-full md:w-1/2 p-3">
                        <div className="bg-white border rounded shadow">
                            <div className="border-b p-3">
                                <h5 className="font-bold uppercase text-gray-600">Graph</h5>
                            </div>
                            <div className="p-5">
                                <canvas id="chartjs-7" className="chartjs" width="undefined" height="undefined">{}</canvas>
                                {/*<script>*/}
                                {/*    new Chart(document.getElementById("chartjs-7"), {*/}
                                {/*    "type": "bar",*/}
                                {/*    "data": {*/}
                                {/*    "labels": ["January", "February", "March", "April"],*/}
                                {/*    "datasets": [{*/}
                                {/*    "label": "Page Impressions",*/}
                                {/*    "data": [10, 20, 30, 40],*/}
                                {/*    "borderColor": "rgb(255, 99, 132)",*/}
                                {/*    "backgroundColor": "rgba(255, 99, 132, 0.2)"*/}
                                {/*}, {*/}
                                {/*    "label": "Adsense Clicks",*/}
                                {/*    "data": [5, 15, 10, 30],*/}
                                {/*    "type": "line",*/}
                                {/*    "fill": false,*/}
                                {/*    "borderColor": "rgb(54, 162, 235)"*/}
                                {/*}]*/}
                                {/*},*/}
                                {/*    "options": {*/}
                                {/*    "scales": {*/}
                                {/*    "yAxes": [{*/}
                                {/*    "ticks": {*/}
                                {/*    "beginAtZero": true*/}
                                {/*}*/}
                                {/*}]*/}
                                {/*}*/}
                                {/*}*/}
                                {/*});*/}
                                {/*</script>*/}
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-3">
                        <div className="bg-white border rounded shadow">
                            <div className="border-b p-3">
                                <h5 className="font-bold uppercase text-gray-600">Graph</h5>
                            </div>
                            <div className="p-5">
                                <canvas id="chartjs-0" className="chartjs" width="undefined" height="undefined">{}</canvas>
                                {/*<script>*/}
                                {/*    new Chart(document.getElementById("chartjs-0"), {*/}
                                {/*    "type": "line",*/}
                                {/*    "data": {*/}
                                {/*    "labels": ["January", "February", "March", "April", "May", "June", "July"],*/}
                                {/*    "datasets": [{*/}
                                {/*    "label": "Views",*/}
                                {/*    "data": [65, 59, 80, 81, 56, 55, 40],*/}
                                {/*    "fill": false,*/}
                                {/*    "borderColor": "rgb(75, 192, 192)",*/}
                                {/*    "lineTension": 0.1*/}
                                {/*}]*/}
                                {/*},*/}
                                {/*    "options": {}*/}
                                {/*});*/}
                                {/*</script>*/}
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                        <div className="bg-white border rounded shadow">
                            <div className="border-b p-3">
                                <h5 className="font-bold uppercase text-gray-600">Graph</h5>
                            </div>
                            <div className="p-5">
                                <canvas id="chartjs-1" className="chartjs" width="undefined" height="undefined">{}</canvas>
                                {/*<script>*/}
                                {/*    new Chart(document.getElementById("chartjs-1"), {*/}
                                {/*    "type": "bar",*/}
                                {/*    "data": {*/}
                                {/*    "labels": ["January", "February", "March", "April", "May", "June", "July"],*/}
                                {/*    "datasets": [{*/}
                                {/*    "label": "Likes",*/}
                                {/*    "data": [65, 59, 80, 81, 56, 55, 40],*/}
                                {/*    "fill": false,*/}
                                {/*    "backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(201, 203, 207, 0.2)"],*/}
                                {/*    "borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],*/}
                                {/*    "borderWidth": 1*/}
                                {/*}]*/}
                                {/*},*/}
                                {/*    "options": {*/}
                                {/*    "scales": {*/}
                                {/*    "yAxes": [{*/}
                                {/*    "ticks": {*/}
                                {/*    "beginAtZero": true*/}
                                {/*}*/}
                                {/*}]*/}
                                {/*}*/}
                                {/*}*/}
                                {/*});*/}
                                {/*</script>*/}
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                        <div className="bg-white border rounded shadow">
                            <div className="border-b p-3">
                                <h5 className="font-bold uppercase text-gray-600">Graph</h5>
                            </div>
                            <div className="p-5">
                                <canvas id="chartjs-4" className="chartjs" width="undefined" height="undefined">{}</canvas>
                                {/*<script>*/}
                                {/*    new Chart(document.getElementById("chartjs-4"), {*/}
                                {/*    "type": "doughnut",*/}
                                {/*    "data": {*/}
                                {/*    "labels": ["P1", "P2", "P3"],*/}
                                {/*    "datasets": [{*/}
                                {/*    "label": "Issues",*/}
                                {/*    "data": [300, 50, 100],*/}
                                {/*    "backgroundColor": ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"]*/}
                                {/*}]*/}
                                {/*}*/}
                                {/*});*/}
                                {/*</script>*/}
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                        <div className="bg-white border rounded shadow">
                            <div className="border-b p-3">
                                <h5 className="font-bold uppercase text-gray-600">Template</h5>
                            </div>
                            <div className="p-5">{}</div>
                        </div>
                    </div>
                    <div className="w-full p-3">
                        <div className="bg-white border rounded shadow">
                            <div className="border-b p-3">
                                <h5 className="font-bold uppercase text-gray-600">Table</h5>
                            </div>
                            <div className="p-5">
                                <table className="w-full p-5 text-gray-700">
                                    <thead>
                                        <tr>
                                            <th className="text-left text-blue-900">Name</th>
                                            <th className="text-left text-blue-900">Side</th>
                                            <th className="text-left text-blue-900">Role</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>Obi Wan Kenobi</td><td>Light</td><td>Jedi</td></tr>
                                        <tr><td>Greedo</td><td>South</td><td>Scumbag</td></tr>
                                        <tr><td>Darth Vader</td><td>Dark</td><td>Sith</td></tr>
                                    </tbody>
                                </table>
                                <p className="py-2"><a href="#">See More issues...</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    );
}

export default DashboardPanel;
