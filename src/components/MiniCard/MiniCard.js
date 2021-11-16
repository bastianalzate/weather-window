import React from "react";
import { useDispatch } from "react-redux";
import { fetchAddCities } from "../../actions/actions";
import s from "./MiniCard.module.css";

const MiniCard = (props) => {
    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(fetchAddCities(props.name))
    }

    return(
        <div className={s.miniCardContainer} onClick={handleOnClick}>
            <span className={s.titulo}>
                {props.name}
            </span>

            <span>
                {props.main.temp}°
            </span>

            <img src={`http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`} alt="img" />
        </div>
    )
}

export default MiniCard;