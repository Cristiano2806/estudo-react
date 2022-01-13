import FamiliaMembro from "./FamiliaMembro";
import React from "react";

export default (props) => {
  return (
    <div>
      <FamiliaMembro nome="Cristiano" sobrenome="Botelho"/>
      <FamiliaMembro nome="Pedro" {...props}/>
      <FamiliaMembro nome="Thays" sobrenome={props.sobrenome}/>
    </div>
  );
};
