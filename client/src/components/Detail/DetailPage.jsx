import React from "react";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, clearDetail } from "../../redux/actions";
import { useEffect } from "react";
import "../Detail/DetailCss.css"

export default function Detail(props){
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getDetail(props.match.params.id)); 
        return() => dispatch(clearDetail())
    }, [dispatch])

    

    const myRecipe = useSelector ((state)=>state.detail)
    return (
            
        <div>
            { 

                Object.values(myRecipe).length === 0 ? <h1> cargando...</h1> :
                <div className="Detail">
                    <h1 id="h1" >{myRecipe.name}</h1>
                    <p>Summary: {myRecipe.resumenPlato?.replace(/<[^>]*>/g, '')}</p>
                    <h2 id="h2">Health Score: {myRecipe.healthScore}</h2>
                    <h3 id="h3" >Diets: {myRecipe.diets}</h3>
                    <h5 id="h5">Steps: {myRecipe.pasos? myRecipe.pasos :myRecipe.steps }</h5>
                    <div className="divimage">
                    <img id="image"  src= {myRecipe.image} alt='Photo'/>
                    </div>
                </div>
            }
            <Link to="/home">
                <button className="buttonGoBack" type="button">Go back</button>
            </Link>
        </div>

    )

}



