import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Cristina from "./components/basicos/Cristina";

export default () => (
  <div id="app">
    <h1>Fundamentos React (Arrow _)</h1>
    <Fragmento />
    <ComParametro titulo="Situação do Aluno" 
    aluno="Pedro Cássio" nota={9.6} />
    <Primeiro></Primeiro>
    <Cristina></Cristina>
  </div>
);
