import { ADD_CITIES, ADD_MINI_CITIE } from "../action-types/const";

const initialState = {
    citieLoaded:{
            name: "Medellin",
            clouds: {all: 98},
            main: {humidity: 56, temp: 16},
            weather:[{description: "clear sky", icon: "03d"}]
        },
    citiesNames: ["medellin", "bogota", "paris", "salvador", "cordoba"],
    citiesMiniCards: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_CITIES:
            return{
                ...state,
                citieLoaded: action.payload
            }
        case ADD_MINI_CITIE:
            return{
                ...state,
                citiesMiniCards: [...state.citiesMiniCards, action.payload]
            }
        default:
            return state;
    }
}

export default rootReducer;