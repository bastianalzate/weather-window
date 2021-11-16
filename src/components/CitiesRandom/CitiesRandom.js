import React from "react";
import { useSelector } from "react-redux";
import MiniCard from "../MiniCard/MiniCard";
// import { fetchAddMiniCities } from "../../actions/actions";
import s from "./CitiesRandom.module.css";

const CitiesRandom = () => {
    const citiesMiniCards = useSelector(state => state.citiesMiniCards)
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     // citiesNames.map((citi, index) => {
    //     //     if(index < 5){
    //     //        return dispatch(fetchAddMiniCities(citi))
    //     //     }
    //     // })
    //     citiesNames.forEach((citi, index) => {
    //         if(index < 5){
    //             dispatch(fetchAddMiniCities(citi))
    //         }
    //     });
    // },[])

    return(
        <div className={s.citiesRandomContainer}>
            {
                citiesMiniCards.map((citi) => <MiniCard {...citi}/>)
            }
        </div>
    )
}

export default CitiesRandom;