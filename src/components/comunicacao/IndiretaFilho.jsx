import React, { useState } from "react";
import IndiretaPai from "./IndiretaPai";

export default props =>{
    const cb = props.quandoClicar;
    const gerarIdade = () => parseInt(Math.random() * (19)) + 40;
    const gerarNerd = () => Math.random() > 0.5;
    
    return(
        <div>
            <div>Filho</div>
                <button 
                onClick={_ => cb('João', gerarIdade(), gerarNerd())
                }>
                    Fornecer Informações
                    </button>
                
        </div>
    );
}