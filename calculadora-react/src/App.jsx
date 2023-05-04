import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = (val) => {
    setInput(input + val);
  };

  //&& ((input.indexOf('+') =! -1) || (input.indexOf('-') =! -1) || (input.indexOf('*') =! -1) || (input.indexOf('/') =! -1))
  const calcularInput = () => {
    if (input){
      setInput( evaluate(input)  );
      //console.log(input.indexOf('*'))
    }else{
      alert('Por favor ingrese valores para realizar los calculos')
    }
    
  };

  return (
    <div className="App">

      <div className='titulo'>
        <h1>CALCULADORA ONLINE</h1>
      </div>

      <div className='contenedorCalculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularInput}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        
        <div className='fila'>
          <BotonClear manejarClear={ () => setInput('')}>
            Clear
          </BotonClear>
        </div>

      </div>
    </div>
  );
}

export default App;