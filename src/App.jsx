import React from "react";

import Aleatorio from "./components/basicos/Aleatorio"
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

export default () => (
  <div id="app">
    <h1>Fundamentos React (Arrow _)</h1>
    <Fragmento/>
    <ComParametro titulo="Situação do Aluno" 
    aluno="Pedro Cássio" nota={9.6} />
    <Primeiro></Primeiro>
    <Aleatorio min={1} max={60}/>
  </div>
);
