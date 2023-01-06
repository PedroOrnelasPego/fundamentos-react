import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import ComParametro from './components/basicos/ComParamentro';
import Primeiro from './components/basicos/Primeiro';
import Fragmento from './components/basicos/fragmento';


ReactDOM.render(
    <div id="app">
        <Primeiro></Primeiro>
        <ComParametro
        titulo= "Situção do Aluno"
        aluno= "Pedro" nota={9.3}/>
        <Fragmento></Fragmento>
    </div>,
document.getElementById('root')
);