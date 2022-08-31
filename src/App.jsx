import "./App.css";
import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragment from "./components/basicos/Fragment";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/basicos/layout/Card";
import Familia from "./components/basicos/Familia";

export default () => (

    <div className="App">
        <h1>Fundamentos React (arrow_)</h1>
        <div className="Cards">
            <Card titulo="#5 - Componentes com Filhos" color="#2567E8"> 
                <Familia sobrenome="Barbosa"/>
            </Card>

            <Card titulo="#4 - Desafio Aleatório" color="#FA6900"> 
                <Aleatorio min={10} max={60} />
            </Card>

            <Card titulo="#3 - Fragmento" color="#E94CBF"> 
                    <Fragment />
            </Card>

            <Card titulo="#02 - Com Parâmetros" color="#E8B71A"> 
            <ComParametro
                titulo="Situação Aluno"
                aluno="Felipe Barbosa"
                nota="9.5"
            />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#E94CBF"> 
                <Primeiro />
            </Card>
        </div>
        
    </div>

);
