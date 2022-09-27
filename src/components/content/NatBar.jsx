import React from 'react';
import logoRash from '../../imagenes/logoChico1.png';
import FormSearch from '../layouts/FormSearch';
import Secciones from '../layouts/secciones';
import '../../styles/carrito.css';


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
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav me-auto">

        <Secciones />
      </ul>

      <div>
            <button className="carrito btn btn-secondary my-2 my-sm-0" type="submit">
              <i className="fa-solid fa-cart-shopping " ></i>            
            </button>
        </div>


    <FormSearch busqueda='Buscar Producto' TextoBoton='Buscar'/>
    </div>
  </div>
</nav>

    </div>
  );
}

export default NatBar;
