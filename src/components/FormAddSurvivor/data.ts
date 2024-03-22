
interface lastLocationTypes {
    latitude: number
    longitude: number
}

interface inventoryTypes {
    id: string
    label: string
    quantity: number
}

interface survivorDataTypes {
    name: string
    age: number
    gender: string
    lastLocation: lastLocationTypes
    inventory: inventoryTypes[]
    infected: boolean
}


const initialSurvivorDataState: survivorDataTypes = {
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


export {
    inventoryTypes,
    initialSurvivorDataState,
    lastLocationTypes,
    survivorDataTypes
}
