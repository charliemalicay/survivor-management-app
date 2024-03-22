const dummySurvivorsData =[
    {
        "id": 0,
        "name": "Michael Smith",
        "age": 30,
        "gender": "male",
        "lastLocation": {
            latitude: 17.238656415928315,
            longitude: 116.47050803853293
        },
        "inventory": [
            {id: "water", label: "water", quantity: 24},
            {id: "food", label: "Food", quantity: 30},
            {id: "medication", label: "Medication", quantity: 10}
        ],
        "infected": false
    },
    {
        "id": 1,
        "name": "Anna Johnson",
        "age": 25,
        "gender": "female",
        "lastLocation": {
            latitude: 20.89777526504747,
            longitude: 124.8509379467
        },
        "inventory": [
            {id: "water", label: "water", quantity: 16},
            {id: "food", label: "Food", quantity: 30},
            {id: "cVirusVaccine", label: "C-Virus Vaccine", quantity: 10}
        ],
        "infected": true
    },
    {
        "id": 2,
        "name": "Robert Williams",
        "age": 45,
        "gender": "male",
        "lastLocation": {
            latitude: 5.984098640877634,
            longitude: 125.07302855666927
        },
        "inventory": [
            {id: "water", label: "water", quantity: 20},
            {id: "cVirusVaccine", label: "C-Virus Vaccine", quantity: 7}
        ],
        "infected": false
    },
    {
        "id": 3,
        "name": "Patricia Brown",
        "age": 52,
        "gender": "female",
        "lastLocation": {
            latitude: 11.113216953091653,
            longitude: 119.9526901293948
        },
        "inventory": [
                {id: "food", label: "Food", quantity: 40},
                {id: "medication", label: "Medication", quantity: 22},
                {id: "cVirusVaccine", label: "C-Virus Vaccine", quantity: 3}
        ],
        "infected": false
    },
    {
        "id": 4,
        "name": "David Jones",
        "age": 20,
        "gender": "male",
        "lastLocation": {
            latitude: 9.1761237556204,
            longitude: 118.2797922559914
        },
        "inventory": [
            {id: "water", label: "Water", quantity: 18},
            {id: "food", label: "Food", quantity: 12},
            {id: "medication", label: "Medication", quantity: 5},
            {id: "cVirusVaccine", label: "C-Virus Vaccine", quantity: 20}
        ],
        "infected": true
    },
    {
        "id": 5,
        "name": "Jennifer Garcia",
        "age": 37,
        "gender": "female",
        "lastLocation": {
            latitude: 6.244270083671785,
            longitude: 120.88583711151978
        },
        "inventory": [
            {id: "water", label: "Water", quantity: 25},
            {id: "food", label: "Food", quantity: 30},
            {id: "medication", label: "Medication", quantity: 14}
        ],
        "infected": true
    },
    {
        "id": 6,
        "name": "James Martinez",
        "age": 29,
        "gender": "male",
        "lastLocation": {
            latitude: 7.794512810318507,
            longitude: 123.43751219163232
        },
        "inventory": [
            {id: "water", label: "Water", quantity: 22},
            {id: "medication", label: "Medication", quantity: 20},
            {id: "cVirusVaccine", label: "C-Virus Vaccine", quantity: 11}
        ],
        "infected": false
    },
    {
        "id": 7,
        "name": "Linda Hernandez",
        "age": 41,
        "gender": "female",
        "lastLocation": {
            latitude: 10.211670925857424,
            longitude: 122.8817802261283
        },
        "inventory": [
            {id: "medication", label: "Medication", quantity: 13},
            {id: "cVirusVaccine", label: "C-Virus Vaccine", quantity: 6}
        ],
        "infected": true
    },
    {
        "id": 8,
        "name": "William Davis",
        "age": 65,
        "gender": "male",
        "lastLocation": {
            latitude: 18.57827381741027,
            longitude: 120.08199210629132
        },
        "inventory": [
            {id: "water", label: "Water", quantity: 21},
            {id: "food", label: "Food", quantity: 28},
            {id: "medication", label: "Medication", quantity: 18}
        ],
        "infected": false
    },
    {
        "id": 9,
        "name": "Elizabeth Wilson",
        "age": 32,
        "gender": "female",
        "lastLocation": {
            latitude: 18.87056921980715,
            longitude: 125.12888521194262
        },
        "inventory": [
            {id: "water", label: "Water", quantity: 23},
            {id: "cVirusVaccine", label: "C-Virus Vaccine", quantity: 12}
        ],
        "infected": true
    }
]

const routersConstants = {
    baseRoute: '/',
    survivorList: '/survivor-list'
}

export {
    dummySurvivorsData,
    routersConstants
}
