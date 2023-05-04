import React from "react";
import '../style/boton.css';

function Boton(props){
  const esOperador = (valor)=>{
    return isNaN(valor) && (valor != '.') && (valor != '=')
  }

  return(
    <div className={`botonContenedor ${esOperador(props.children) ? 'operador' : null}`}
        onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
}
export default Boton;