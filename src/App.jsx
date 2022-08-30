import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragment from "./components/basicos/Fragment";

export default () => (

    <div id="app">
        <h1>Fundamentos React (arrow_)</h1>
        <Fragment />
        <ComParametro
            titulo="Situação Aluno"
            aluno="Felipe Barbosa"
            nota="9.5"
        />
        <Primeiro />
    </div>

);
