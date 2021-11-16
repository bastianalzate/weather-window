import React, { useEffect } from "react";
import CardDetails from "../CardDetails/CardDetails";
import CardView from "../CardView/CardView";
import s from "./CardContainer.module.css";

const CardContainer = () => {
    return(
        <div className={s.CardContainer}>
            <CardView />
            <CardDetails />
        </div>
    )
}

export default CardContainer;