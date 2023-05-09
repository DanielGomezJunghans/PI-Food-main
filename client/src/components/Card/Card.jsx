import React from "react";
import '../Card/Card.css'

export default function Card({name, image, tiposDieta}){
    return (
     <div className="container">
            <h3>{name}</h3>
            <h5>{tiposDieta}</h5>
            <img src={image} alt='img not found' width='200px' height='250px' />
        </div>
    );
} 