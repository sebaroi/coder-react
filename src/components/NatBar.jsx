import React from 'react';
import logoRash from '../imagenes/logoChico1.png';
import FormSearch from './FormSearch';
import Secciones from './secciones';


const NatBar = () => {
  return (
    <div>
      
      <nav className="banner navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> 
    <div className='logoRash'>
        <img 
        src={logoRash} 
        alt='logo de Rash' />
    </div> </a>
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">

        <Secciones />
      </ul>

    <FormSearch busqueda='Buscar Producto' TextoBoton='Buscar'/>
    </div>
  </div>
</nav>

    </div>
  );
}

export default NatBar;
