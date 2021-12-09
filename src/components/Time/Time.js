import React, { useEffect, useState } from "react";
import s from "./Time.module.css";

const Time = () => {
    const [state, setState] = useState({
        hour: 0,
        min: 0,
        sec: 0
    })

    useEffect(() => {
        const time = new Date()
        setTimeout(() => {
            setState({
                hour: time.getHours(),
                min: time.getMinutes(),
                sec: time.getSeconds()
            })
        }, 1000)
    }, [state.hour, state.min, state.sec])

    return(
        <div className={s.timeContainer}>
            <div className={s.time}>
                <span>{state.hour < 10 ? `0${state.hour}` : state.hour}:</span>
                <span>{state.min < 10 ? `0${state.min}` : state.min}</span>
            </div>
            <div className={s.date}>
                <p>Miercoles 8 de Diciembre 2021</p>
            </div>
        </div>
    )
}

export default Time;