import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAddCities } from "../../actions/actions";
import { FaSearch } from "react-icons/fa";
import s from "./SearchBar.module.css";

const SearchBar = () => {
    const [citie, setCitie] = useState("");
    const dispatch = useDispatch();

    const handleOnChange = (e) => {
        setCitie(e.target.value);
    }

    const handleOnClick = () => {
        dispatch(fetchAddCities(citie));
        setCitie("");
    }

    const handleOnKeyDown = (e) => {
        if(e.keyCode === 13){
            dispatch(fetchAddCities(citie));
            setCitie("");
        }
    }



    return(
        <div className={s.searchBarContainer}>
            <div>
                <input onChange={handleOnChange} onKeyDown={handleOnKeyDown} type="text" placeholder="Buscar..." name="citie" value={citie}/>
                <FaSearch onClick={handleOnClick} className={s.iconSearch}/>
            </div>
        </div>
    )
}

export default SearchBar;