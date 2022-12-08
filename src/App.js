import './App.css';
import { Boton } from './Componentes/Boton';
import { Contador } from './Componentes/Contador';
import logo from './imagenes/freecodecamp-logo.png';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0); //primer elemento el valor del estado , segundo valor es una funcion que te permite actualizarlo....... Entre parentesis de "useState" indicas el valor inicial

  const manejarClic = () => {
    setNumClics(numClics + 1); //le pasas como argumento numClics y lo que quieres que haga
  }

  const reiniciarContado = () => {
    setNumClics(0); //numClics sera igual a 0
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
        src = {logo}
        alt = 'Logo de freeCodeCamp' />
      </div>

      <div className='contenedor-principal'>
        <Contador 
          numClics = { numClics } />
        <Boton 
          texto = 'Clic'
          esBotonDeClic ={true}
          manejarClic = {manejarClic} />

        <Boton 
          texto = 'Reiniciar'
          esBotonDeClic ={false}
          manejarClic = {reiniciarContado} />

      </div>
    </div>
  );
}

export default App;
