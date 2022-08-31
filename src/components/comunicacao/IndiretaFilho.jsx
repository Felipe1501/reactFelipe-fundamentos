import React from "react";
import IndiretaPai from "./IndiretaPai";

export default props =>{
    const cb = props.quandoClicar;
    return(
        <div>
            <div>Filho</div>
                <button 
                onClick={_ =>cb('João', 58, true)
                }>
                    Fornecer Informações
                    </button>
                
        </div>
    );
}