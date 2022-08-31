import React from "react";
import DiretaPai from "./DiretaPai";

export default props =>{
    return(
        <div>
            <span>{props.nome}</span>
            <span> <strong>{props.idade}</strong> </span>
            <span>{props.nerd ? 'Verdadeiro' : 'Falso'}!</span>
        </div>
    );
}