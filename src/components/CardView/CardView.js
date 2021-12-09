import React from "react";
import { useSelector } from "react-redux";
import Time from "../Time/Time";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import s from "./CardView.module.css";
import { useHistory } from "react-router";

const CardView = () => {
    const citie = useSelector(state => state.citieLoaded)
    const history = useHistory();

    const limpiadorURL = () => {
        history.push("/");
    }

    return(
        <div className={s.cardViewContainer}>
            <div className={s.socialContainer}>
                <div>
                    {/* <button>Cambiar color</button> */}
                </div>
                <div className={s.socialMedia}>
                    <a href="https://github.com/bastianalzate">
                        <FaGithub className={s.github} onClick={limpiadorURL}/>
                    </a>
                    <a href="https://www.linkedin.com/in/bastianalzate/">
                        <FaLinkedin className={s.linkedin} onClick={limpiadorURL}/>
                    </a>
                </div>
            </div>
            <div className={s.timeContainer}>
                <Time />
            </div>

            <div className={s.contentContainer}>
                <div className={s.tempContainer}>
                    <span>{citie.main.temp}°</span>
                </div>
                <div className={s.nameContainer}>
                    <h1>{citie.name}</h1>
                </div>
                <div className={s.imgContainer}>
                    <img src={`https://openweathermap.org/img/wn/${citie.weather[0].icon}@2x.png`} alt="text" />
                    <span>{citie.weather[0].description}</span>
                </div>
            </div>
        </div>
    )
}

export default CardView;