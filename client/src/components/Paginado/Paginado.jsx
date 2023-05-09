import React from "react";
import '../Paginado/Paginado.css'

export default function Paginado ({RecipesPerPage, allRecipes, paginado}){
    const pageNumber = []
    for (let i=1;i<= Math.ceil(allRecipes/RecipesPerPage); i++){
        pageNumber.push(i)
    }

    return(
        <nav>
            <ul className="paginado">
                {pageNumber &&
                pageNumber.map(number =>(
                    <li className="number" key={number}>
                    <a onClick={()=> paginado(number)} className="button">{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}