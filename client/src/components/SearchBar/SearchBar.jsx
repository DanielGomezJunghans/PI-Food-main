import React from "react";
import {useState} from 'react';
import { useDispatch } from "react-redux";
import { getNameRecipes } from "../../redux/actions/index";
import '../SearchBar/SearchBarCss.css'



export default function SearchBar () {
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
    }
    
    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNameRecipes(name))
    }

    return (
        <div className="SearchBar">
            <input id="inputSearch"
            type= 'text' 
            placeholder="Search for a recipe" 
            onChange={(e) => handleInputChange(e)} />

            <button className="SeachButton"
            type="submit" 
            onClick={(e)=>handleSubmit(e)}>Search</button>
        </div>
    )

}