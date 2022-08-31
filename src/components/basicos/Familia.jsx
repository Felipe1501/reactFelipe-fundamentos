import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default props =>{
    return(
        <div>
            <FamiliaMembro nome="Felipe" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="João" {...props}/>
            <FamiliaMembro nome="Bianca" sobrenome="Carolina"/>
        </div>
    )
}