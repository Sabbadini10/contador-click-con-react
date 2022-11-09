import './App.css';
import './styles/Boton.css'
import Boton from './components/Boton';
import Contador from './components/Contador'
import bienvenidosLogo from './images/logo-bienvenidos.png'
import {useState} from 'react';

function App() {

  // utilizo un hook
const [numClick, setNumClick] = useState(0);


//creo la funcion para aumentar click
  const manejarClick = () => {
  setNumClick(numClick + 1)
  };

//creo la funcion reiniciar click a 0
  const reiniciarClick = () => {
    setNumClick(numClick - numClick )
  }

  return (
    <div className="App">
      <div className='contenedor-logo'>
        <img className="contenedor-logo-imagen" src={bienvenidosLogo} alt="logo-bienvenidos" />
      </div>
      <div className='contenedor-contador'>
        <Contador className="contador" numClick={numClick} />
      <Boton 
      texto="Click"
      botonClick={true}
      manejarClick={manejarClick}
      />
      <Boton 
         texto="Reiniciar"
         botonClick={false}
         manejarClick={reiniciarClick}
      />
      </div>
    </div>
  );
}

export default App;
