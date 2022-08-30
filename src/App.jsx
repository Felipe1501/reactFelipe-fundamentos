import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragment from "./components/basicos/Fragment";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/basicos/layout/Card";

export default () => (

    <div id="app">
        <h1>Fundamentos React (arrow_)</h1>

        <Card titulo="#4 - Desafio Aleatório"> 
            <Aleatorio min={10} max={60} />
        </Card>

        <Card titulo="#3 - Fragmento"> 
                <Fragment />
        </Card>

        <Card titulo="#02 - Com Parâmetros"> 
        <ComParametro
            titulo="Situação Aluno"
            aluno="Felipe Barbosa"
            nota="9.5"
        />
        </Card>

        <Card titulo="#01 - Primeiro Componente"> 
            <Primeiro />
        </Card>
        
        

        
    </div>

);
