import React from "react";
import { useSelector } from "react-redux";
import s from "./CitieDetails.module.css";

const CitieDetails = () => {
    const citie = useSelector(state => state.citieLoaded)

    return(
        <div className={s.citieDetailsContainer}>
            <h3>Wheater Details</h3>
            <div>
                <span>Clouds</span>
                <span>{citie.clouds.all}</span>
            </div>

            <div>
                <span>Humidity</span>
                <span>{citie.main.humidity}</span>
            </div>

            <div>
                <span>Temp</span>
                <span>{citie.main.temp}</span>
            </div>

            <div>
                <span>Day state</span>
                <span>{citie.weather[0].description}</span>
            </div>
        </div>
    )
}

export default CitieDetails;