import './index.css';
import ReactDOM from 'react-dom';
import React from 'react';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';


ReactDOM.render(
    <div id='app'>
       <Primeiro />
       <ComParametro 
        titulo="Situação Aluno"
        aluno="Felipe Barbosa"
        nota="9.5"
        />
       <ComParametro 
        titulo="Situação Aluno"
        aluno="Thomas"
        nota="5"
        />
       </div>,
    document.getElementById('root')
);