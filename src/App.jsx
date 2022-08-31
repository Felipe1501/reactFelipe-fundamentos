import "./App.css";
import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragment from "./components/basicos/Fragment";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/basicos/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import Usuarioinfo from "./components/condicional/Usuarioinfo";
import DiretaPai from "./components/comunicacao/DiretaPai";

export default () => (

    <div className="App">
        <h1>Fundamentos React </h1>
        <div className="Cards">
            <Card titulo="#9 - Comunicação Direta" color="#4327F2"> 
                <DiretaPai />
            </Card>

            <Card titulo="#8 - Renderização Condicional" color="#27F235"> 
                <ParOuImpar numero={21} />
                <Usuarioinfo usuario={{nome: 'Felipe'}} />
                <Usuarioinfo usuario={{}} />
            </Card>

            <Card titulo="#7 - Repeticão Produtos" color="#EB5EBF"> 
                <TabelaProdutos />
            </Card>

            <Card titulo="#6 - Repeticão" color="#EB5EBF"> 
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#5 - Componentes com Filhos" color="#2567E8"> 
                <Familia sobrenome="Santos">
                
                    <FamiliaMembro nome="Felipe" />
                    <FamiliaMembro nome="Bianca" />
                    <FamiliaMembro nome="João" />
                </Familia>
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
