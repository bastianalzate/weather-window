import Swal from 'sweetalert2'
import { ADD_CITIES, ADD_MINI_CITIE } from "../action-types/const";

export const addCities = (payload) => {
    return {
        type: ADD_CITIES,
        payload
    }
}

export const addMiniCities = (payload) => {
    return {
        type: ADD_MINI_CITIE,
        payload
    }
}


export const fetchAddCities = (ciudad) => {
    const apiKey = "4ae2636d8dfbdc3044bede63951a019b"
    return (dispatch) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => dispatch(addCities(data)))
        .catch(err => 
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se encontro la ciudad',
          }))
    }
}

export const fetchAddMiniCities = (ciudad) => {
    const apiKey = "4ae2636d8dfbdc3044bede63951a019b"
    return (dispatch) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => dispatch(addMiniCities(data)))
    }
}