import React from "react";
import '../style/botonClear.css'

const BotonClear = (props) => (
  <div className="botonClear" 
    onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default BotonClear