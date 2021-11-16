import React from "react";
import CitieDetails from "../CitieDetails/CitieDetails";
import CitiesRandom from "../CitiesRandom/CitiesRandom";
import SearchBar from "../SearchBar/SearchBar";
import s from "./CardDetails.module.css";

const CardDetails = () => {
    

    return(
        <div className={s.cardDetailsContainer}>
            <SearchBar />
            <CitiesRandom />
            <CitieDetails />
        </div>
    )
}

export default CardDetails;